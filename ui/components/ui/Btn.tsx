"use client";
import type { CSSProperties, MouseEvent } from "react";
import { Colors } from "@/lib/tokens";

interface BtnProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "danger" | "success" | "subtle";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  small?: boolean;
}

const Btn = ({ children, variant = "primary", onClick, style, small }: BtnProps) => {
  const base: CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: "6px", border: "none", cursor: "pointer",
    fontFamily: "'Inter',sans-serif", fontWeight: 600, borderRadius: "8px", transition: "all .15s",
    padding: small ? "5px 12px" : "8px 18px", fontSize: small ? "11px" : "12px"
  };
  const variants: Record<string, CSSProperties> = {
    primary: { background: `linear-gradient(135deg,${Colors.indigo},#5A52E0)`, color: "#fff", boxShadow: `0 3px 14px rgba(108,99,255,.3)` },
    ghost: { background: "transparent", color: Colors.text, border: `1px solid ${Colors.border}` },
    danger: { background: `rgba(255,107,107,.1)`, color: Colors.red, border: `1px solid rgba(255,107,107,.22)` },
    success: { background: `rgba(16,229,160,.1)`, color: Colors.green, border: `1px solid rgba(16,229,160,.22)` },
    subtle: { background: Colors.cardAlt, color: Colors.muted, border: `1px solid ${Colors.border}` },
  };
  return <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>{children}</button>;
};

export default Btn;
