import { Colors } from "@/lib/tokens";

interface BadgeProps {
  children: React.ReactNode;
  color?: "indigo" | "cyan" | "green" | "red" | "purple" | "amber" | "muted";
}

const Badge = ({ children, color = "indigo" }: BadgeProps) => {
  const colorMap = {
    indigo: { background: "rgba(108,99,255,.13)", text: Colors.indigo },
    cyan: { background: "rgba(0,212,255,.1)", text: Colors.cyan },
    green: { background: "rgba(16,229,160,.11)", text: Colors.green },
    red: { background: "rgba(255,107,107,.11)", text: Colors.red },
    purple: { background: "rgba(168,85,247,.13)", text: Colors.purple },
    amber: { background: "rgba(255,179,71,.11)", text: Colors.amber },
    muted: { background: "rgba(124,133,162,.09)", text: Colors.muted }
  };
  const { background, text } = colorMap[color] || colorMap.indigo;
  return <span style={{
    background, color: text, fontSize: "10px", fontWeight: 700,
    fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase", letterSpacing: ".05em",
    padding: "2px 8px", borderRadius: "20px", whiteSpace: "nowrap"
  }}>{children}</span>;
};

export default Badge;
