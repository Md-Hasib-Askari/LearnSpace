"use client";
import { Colors } from "@/lib/tokens";

interface CardProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

export const Card = ({ children, style, onClick, className }: CardProps) => (
  <div onClick={onClick} className={className} style={{
    background: Colors.card, border: `1px solid ${Colors.border}`,
    borderRadius: "12px", padding: "18px", transition: "border-color .2s",
    cursor: onClick ? "pointer" : "default", ...style
  }}>{children}</div>
);
