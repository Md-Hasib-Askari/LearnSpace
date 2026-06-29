import { BarChart, Briefcase, Database, GraduationCap, Layers, Shield, ShieldAlert, Shuffle, User, UserX, Zap } from "lucide-react";

export const Colors = {
  background: "#080D1A", surface: "#0E1628", card: "#111827", cardAlt: "#151F36",
  border: "rgba(108,99,255,.16)", borderHover: "rgba(108,99,255,.36)",
  indigo: "#6C63FF", cyan: "#00D4FF", purple: "#A855F7", green: "#10E5A0",
  red: "#FF6B6B", amber: "#FFB347", text: "#EEF2FF", muted: "#7C85A2", dimmed: "#3D4A6B",
};

export const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{background:#080D1A;color:#EEF2FF;font-family:'Inter',sans-serif;font-size:14px;line-height:1.6;overflow-x:hidden}
  ::-webkit-scrollbar{width:5px;height:5px}
  ::-webkit-scrollbar-track{background:#080D1A}
  ::-webkit-scrollbar-thumb{background:#6C63FF;border-radius:3px}
  input,textarea,select{font-family:'Inter',sans-serif;font-size:13px;background:#111827;color:#EEF2FF;border:1px solid rgba(108,99,255,.18);border-radius:8px;padding:8px 12px;width:100%;outline:none;transition:border-color .2s}
  input:focus,textarea:focus,select:focus{border-color:#6C63FF}
  input::placeholder,textarea::placeholder{color:#7C85A2}
  select option{background:#111827}
  @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
  @keyframes orbitA{to{transform:rotate(360deg)}}
  @keyframes orbitB{to{transform:rotate(-360deg)}}
  @keyframes glow{0%,100%{box-shadow:0 0 18px rgba(108,99,255,.4)}50%{box-shadow:0 0 32px rgba(108,99,255,.7)}}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
  .a1{animation:fadeUp .35s ease both}
  .a2{animation:fadeUp .35s .07s ease both}
  .a3{animation:fadeUp .35s .14s ease both}
  .a4{animation:fadeUp .35s .21s ease both}
  @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;

export const CourseIcons = [Layers, Database, Shield, BarChart, Shuffle, Zap];

export const RoleColors: Record<string, { color: string; background: string; border: string }> = {
  Admin: { color: Colors.red, background: "rgba(255,107,107,.1)", border: "rgba(255,107,107,.2)" },
  Staff: { color: Colors.amber, background: "rgba(255,179,71,.1)", border: "rgba(255,179,71,.2)" },
  Instructor: { color: Colors.purple, background: "rgba(168,85,247,.1)", border: "rgba(168,85,247,.2)" },
  Student: { color: Colors.cyan, background: "rgba(0,212,255,.1)", border: "rgba(0,212,255,.2)" },
  Guest: { color: Colors.muted, background: "rgba(124,133,162,.1)", border: "rgba(124,133,162,.2)" },
};

export const RoleIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Admin: ShieldAlert, Staff: Briefcase, Instructor: GraduationCap, Student: User, Guest: UserX,
};
