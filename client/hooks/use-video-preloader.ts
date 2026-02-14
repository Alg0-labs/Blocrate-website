import { useEffect, useState } from "react";

const FALLBACK_TIMEOUT_MS = 20000;

export function useVideoPreloader(sources: string[]): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sources.length === 0) {
      setReady(true);
      return;
    }

    let mounted = true;
    const videos: HTMLVideoElement[] = [];
    let loadedCount = 0;
    const total = sources.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= total && mounted) {
        cleanup();
        setReady(true);
      }
    };

    const cleanup = () => {
      videos.forEach((v) => {
        v.removeEventListener("canplaythrough", onCanPlay);
        v.removeEventListener("error", onError);
        v.removeAttribute("src");
        v.load();
      });
    };

    const onCanPlay = () => checkAllLoaded();
    const onError = () => checkAllLoaded();

    sources.forEach((src) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.addEventListener("canplaythrough", onCanPlay);
      video.addEventListener("error", onError);
      video.src = src;
      video.load();
      videos.push(video);
    });

    const timeout = setTimeout(() => {
      if (mounted) {
        cleanup();
        setReady(true);
      }
    }, FALLBACK_TIMEOUT_MS);

    return () => {
      mounted = false;
      clearTimeout(timeout);
      cleanup();
    };
  }, [sources]);

  return ready;
}
