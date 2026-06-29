import type { LucideIcon } from "lucide-react";
import { Colors } from "@/lib/tokens";
import { Card } from "./Card";

interface StatCardProps {
  Icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  accentColor: string;
}

const StatCard = ({ Icon, label, value, change, accentColor }: StatCardProps) => (
  <Card style={{ position: "relative", overflow: "hidden", padding: "16px" }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg,${accentColor},transparent)`
    }} />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,.05)",
        display: "flex", alignItems: "center", justifyContent: "center", color: accentColor
      }}><Icon size={16} /></div>
      {change && <span style={{
        fontSize: 10, fontFamily: "'JetBrains Mono',monospace", padding: "2px 6px",
        borderRadius: 5, color: Colors.green, background: "rgba(16,229,160,.09)"
      }}>{change}</span>}
    </div>
    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 700, lineHeight: 1, marginBottom: 3 }}>{value}</div>
    <div style={{ fontSize: 11, color: Colors.muted, fontWeight: 500 }}>{label}</div>
  </Card>
);

export default StatCard;
