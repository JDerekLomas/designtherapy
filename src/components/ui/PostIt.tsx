"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

type PostItColor = "yellow" | "pink" | "blue" | "green" | "orange" | "purple";

interface PostItProps {
  children: React.ReactNode;
  color?: PostItColor;
  rotation?: number;
  className?: string;
  hover?: boolean;
  size?: "sm" | "md" | "lg";
  showHeart?: boolean;
  onHeartClick?: () => void;
}

// Higher contrast colors for better readability
const colorMap: Record<PostItColor, { bg: string; text: string; shadow: string }> = {
  yellow: {
    bg: "bg-[#FFEB3B]",
    text: "text-[#5D4E00]",
    shadow: "shadow-[#D4C32B]/40",
  },
  pink: {
    bg: "bg-[#F48FB1]",
    text: "text-[#4A1A2C]",
    shadow: "shadow-[#C2728D]/40",
  },
  blue: {
    bg: "bg-[#81D4FA]",
    text: "text-[#0D3C55]",
    shadow: "shadow-[#5FAFD4]/40",
  },
  green: {
    bg: "bg-[#A5D6A7]",
    text: "text-[#1B4D1E]",
    shadow: "shadow-[#7FB881]/40",
  },
  orange: {
    bg: "bg-[#FFCC80]",
    text: "text-[#5C3D00]",
    shadow: "shadow-[#D4A655]/40",
  },
  purple: {
    bg: "bg-[#CE93D8]",
    text: "text-[#3D1A47]",
    shadow: "shadow-[#A76FB5]/40",
  },
};

const sizeMap = {
  sm: "p-4 min-w-[140px]",
  md: "p-5 min-w-[180px]",
  lg: "p-6 min-w-[220px]",
};

const textSizeMap = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
};

export function PostIt({
  children,
  color = "yellow",
  rotation = 0,
  className,
  hover = true,
  size = "md",
  showHeart = false,
  onHeartClick,
}: PostItProps) {
  const { bg, text, shadow } = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      whileHover={hover ? {
        scale: 1.03,
        rotate: 0,
        y: -3,
        zIndex: 10,
      } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        bg,
        text,
        sizeMap[size],
        textSizeMap[size],
        "relative font-semibold leading-snug",
        "shadow-lg",
        shadow,
        // Tape effect at top
        "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        "before:w-14 before:h-5 before:bg-white/70 before:backdrop-blur-sm",
        "before:rounded-sm before:rotate-1 before:shadow-sm",
        className
      )}
      style={{
        // Subtle paper texture
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Heart button for sharing/liking */}
      {showHeart && (
        <button
          onClick={onHeartClick}
          className="absolute top-2 right-2 p-1 hover:scale-110 transition-transform"
          aria-label="Like this"
        >
          <Heart className="w-4 h-4 opacity-60 hover:opacity-100 hover:fill-current" />
        </button>
      )}

      {/* Fold corner effect */}
      <div
        className="absolute bottom-0 right-0 w-7 h-7"
        style={{
          background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.08) 50%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

// Handwritten text style component with better contrast
export function HandwrittenText({
  children,
  className,
  as: Component = "span",
  size = "md"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <Component className={cn("font-handwriting font-medium text-ink-800", sizes[size], className)}>
      {children}
    </Component>
  );
}

// Marker underline effect with better visibility
export function MarkerHighlight({
  children,
  color = "yellow",
  className
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "green" | "blue";
  className?: string;
}) {
  const highlightColors = {
    yellow: "bg-[#FFEB3B]/70",
    pink: "bg-[#F48FB1]/60",
    green: "bg-[#A5D6A7]/70",
    blue: "bg-[#81D4FA]/60",
  };

  return (
    <span className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "absolute inset-0 -skew-x-2 -rotate-1",
          highlightColors[color],
          "-z-10 scale-x-105 scale-y-125"
        )}
        style={{ borderRadius: "2px 8px 5px 9px" }}
      />
      {children}
    </span>
  );
}

// Social share post-it component
export function SharePostIt({
  title,
  url,
  className
}: {
  title: string;
  url: string;
  className?: string;
}) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <PostIt color="yellow" rotation={-2} size="sm" hover={false} className={className}>
      <div className="flex items-center gap-3">
        <span className="font-handwriting text-lg font-semibold">Share:</span>
        <div className="flex gap-2">
          <button onClick={shareOnTwitter} className="hover:scale-110 transition-transform" aria-label="Share on Twitter">
            𝕏
          </button>
          <button onClick={shareOnLinkedIn} className="hover:scale-110 transition-transform" aria-label="Share on LinkedIn">
            in
          </button>
          <button onClick={copyLink} className="hover:scale-110 transition-transform" aria-label="Copy link">
            🔗
          </button>
        </div>
      </div>
    </PostIt>
  );
}
