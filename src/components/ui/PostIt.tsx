"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PostItColor = "yellow" | "pink" | "blue" | "green" | "orange" | "purple";

interface PostItProps {
  children: React.ReactNode;
  color?: PostItColor;
  rotation?: number;
  className?: string;
  hover?: boolean;
  size?: "sm" | "md" | "lg";
}

const colorMap: Record<PostItColor, { bg: string; shadow: string }> = {
  yellow: {
    bg: "bg-[#FFF9C4]",
    shadow: "shadow-[#E6DFA0]/50",
  },
  pink: {
    bg: "bg-[#F8BBD9]",
    shadow: "shadow-[#DFA3C0]/50",
  },
  blue: {
    bg: "bg-[#BBDEFB]",
    shadow: "shadow-[#A3C7E0]/50",
  },
  green: {
    bg: "bg-[#C8E6C9]",
    shadow: "shadow-[#B0CEB1]/50",
  },
  orange: {
    bg: "bg-[#FFE0B2]",
    shadow: "shadow-[#E6C99A]/50",
  },
  purple: {
    bg: "bg-[#E1BEE7]",
    shadow: "shadow-[#C8A6CE]/50",
  },
};

const sizeMap = {
  sm: "p-3 min-w-[120px]",
  md: "p-4 min-w-[160px]",
  lg: "p-6 min-w-[200px]",
};

export function PostIt({
  children,
  color = "yellow",
  rotation = 0,
  className,
  hover = true,
  size = "md",
}: PostItProps) {
  const { bg, shadow } = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      whileHover={hover ? {
        scale: 1.05,
        rotate: 0,
        y: -5,
        zIndex: 10,
      } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        bg,
        sizeMap[size],
        "relative text-ink-800 font-handwriting",
        "shadow-lg",
        shadow,
        // Tape effect at top
        "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        "before:w-12 before:h-4 before:bg-white/60 before:backdrop-blur-sm",
        "before:rounded-sm before:rotate-1",
        className
      )}
      style={{
        // Subtle paper texture
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Fold corner effect */}
      <div
        className="absolute bottom-0 right-0 w-6 h-6"
        style={{
          background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

// Handwritten text style component
export function HandwrittenText({
  children,
  className,
  as: Component = "span"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}) {
  return (
    <Component className={cn("font-handwriting text-ink-700", className)}>
      {children}
    </Component>
  );
}

// Marker underline effect
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
    yellow: "bg-[#FFF59D]/60",
    pink: "bg-[#F48FB1]/40",
    green: "bg-[#A5D6A7]/50",
    blue: "bg-[#90CAF9]/50",
  };

  return (
    <span className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "absolute inset-0 -skew-x-2 -rotate-1",
          highlightColors[color],
          "-z-10 scale-x-105 scale-y-110"
        )}
        style={{ borderRadius: "2px 8px 5px 9px" }}
      />
      {children}
    </span>
  );
}
