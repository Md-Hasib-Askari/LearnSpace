"use client";
import { ArrowRight } from "lucide-react";
import { Colors } from "@/lib/tokens";

interface SectionHeadProps {
  title: string;
  count?: string | number;
  action?: string;
  onAction?: () => void;
}

const SectionHead = ({ title, count, action, onAction }: SectionHeadProps) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700 }}>{title}</span>
    {count && <span style={{
      fontSize: 10, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace",
      background: "rgba(255,255,255,.05)", padding: "1px 7px", borderRadius: 20
    }}>{count}</span>}
    {action && <span onClick={onAction} style={{
      marginLeft: "auto", fontSize: 11, color: Colors.indigo,
      fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
    }}>
      {action}<ArrowRight size={12} /></span>}
  </div>
);

export default SectionHead;
