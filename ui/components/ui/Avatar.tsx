import { Colors } from "@/lib/tokens";

interface AvatarProps {
  name: string;
  size?: number;
  gradient?: string;
}

const Avatar = ({ name, size = 29, gradient }: AvatarProps) => {
  const initials = (name || "?").split(" ").map(w => w[0] || "").join("").slice(0, 2).toUpperCase();
  return <div style={{
    width: size, height: size, borderRadius: "49%",
    background: gradient || `linear-gradient(134deg,${Colors.indigo},${Colors.purple})`,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700, fontSize: size * .34, flexShrink: 0, color: "#fff"
  }}>{initials}</div>;
};

export default Avatar;
