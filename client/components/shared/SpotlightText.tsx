import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightText: React.FC<SpotlightTextProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: -100, y: -100 });
  const [justEnteredHover, setJustEnteredHover] = useState(false);

  useEffect(() => {
    if (!justEnteredHover) return;
    const id = setTimeout(() => setJustEnteredHover(false), 950);
    return () => clearTimeout(id);
  }, [justEnteredHover]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  const handleMouseEnter = () => {
    setJustEnteredHover(true);
  };

  const handleMouseLeave = () => {
    setGradientPos({ x: -100, y: -100 });
  };

  const isHovering = gradientPos.x >= 0 && gradientPos.y >= 0;
  const gradientStyle: React.CSSProperties = isHovering
    ? {
        background: `radial-gradient(
          350px circle at ${gradientPos.x}% ${gradientPos.y}%,
          #FFFFFF 0%,
          #FFFFFF 25%,
          #8B8B8B 45%,
          #8B8B8B 100%
        )`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }
    : {};

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative group cursor-default overflow-hidden", className)}
    >
      <span
        className={cn("block text-white", justEnteredHover && isHovering && "spotlight-reveal")}
        style={gradientStyle}
      >
        {children}
      </span>
    </div>
  );
}
