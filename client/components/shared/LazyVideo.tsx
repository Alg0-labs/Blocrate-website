import React, { useEffect, useRef } from "react";

interface LazyVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={src} {...rest} />;
};
