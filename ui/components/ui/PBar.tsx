import { Colors } from "@/lib/tokens";

interface PBarProps {
  value: number;
  color?: string;
  height?: number;
}

const PBar = ({ value, color, height = 3 }: PBarProps) => (
  <div style={{ height, background: "rgba(255,255,255,.06)", borderRadius: height / 2, overflow: "hidden" }}>
    <div style={{
      height: "100%", width: `${Math.min(100, value)}%`, borderRadius: height / 2,
      background: color || `linear-gradient(90deg,${Colors.indigo},${Colors.cyan})`, transition: "width .5s ease"
    }} />
  </div>
);

export default PBar;
