import React from "react";
import blocrateLogo from "@/assets/blocrate-logo.png";
import { useVideoPreloader } from "@/hooks/use-video-preloader";
import { VIDEO_SOURCES } from "@/lib/video-sources";

interface VideoPreloaderProps {
  children: React.ReactNode;
}

export const VideoPreloader: React.FC<VideoPreloaderProps> = ({ children }) => {
  const ready = useVideoPreloader(VIDEO_SOURCES);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-biocrate-dark text-white">
        <img
          src={blocrateLogo}
          alt="Blocrate"
          className="h-12 sm:h-14 w-auto mb-6 animate-pulse"
        />
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-biocrate-purple-light animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 rounded-full bg-biocrate-purple-light animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 rounded-full bg-biocrate-purple-light animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
