"use client";
import { LayoutDashboard, GraduationCap, BookOpen, Play, Zap, ClipboardList, BarChart2, Users, Settings, Code2, ChevronUp } from "lucide-react";
import { Colors } from "@/lib/tokens";
import Avatar from "@/components/ui/Avatar";

interface NavItem {
  id: string;
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  badge?: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", Icon: LayoutDashboard, label: "Dashboard" },
  { id: "courses", Icon: GraduationCap, label: "Courses", badge: 6 },
  { id: "modules", Icon: BookOpen, label: "Modules" },
  { id: "lessons", Icon: Play, label: "Lessons" },
  { id: "quizzes", Icon: Zap, label: "Quizzes", badge: 3 },
  { id: "enrollments", Icon: ClipboardList, label: "Enrollments" },
  { id: "progress", Icon: BarChart2, label: "Progress" },
  { id: "users", Icon: Users, label: "Users" },
  { id: "settings", Icon: Settings, label: "Settings" },
];

interface SidebarProps {
  page?: string;
  onNavigate?: (id: string) => void;
}

function Sidebar({ page, onNavigate }: SidebarProps) {
  const currentPage = page ?? "dashboard";
  const handleNavigate = onNavigate ?? (() => {});

  return (
    <div style={{
      width: 200, flexShrink: 0, background: Colors.surface, borderRight: `1px solid ${Colors.border}`,
      display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, height: "100vh",
      overflowY: "auto", zIndex: 100
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 9, padding: "16px 14px",
        borderBottom: `1px solid ${Colors.border}`, flexShrink: 0
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: `linear-gradient(135deg,${Colors.indigo},${Colors.cyan})`,
          display: "flex", alignItems: "center", justifyContent: "center", animation: "glow 3s ease infinite"
        }}>
          <BookOpen size={15} color="#fff" />
        </div>
        <span style={{
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14,
          background: `linear-gradient(90deg,${Colors.text},${Colors.cyan})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>LearnSpace</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
        {NAV_ITEMS.map(item => (
          <div key={item.id} onClick={() => handleNavigate(item.id)} style={{
            display: "flex", alignItems: "center", gap: 9,
            padding: "8px 14px", color: currentPage === item.id ? Colors.text : Colors.muted, cursor: "pointer",
            background: currentPage === item.id ? "rgba(108,99,255,.11)" : "transparent",
            borderLeft: currentPage === item.id ? `2px solid ${Colors.indigo}` : "2px solid transparent",
            fontSize: 12, fontWeight: 500, transition: "all .2s"
          }}
            onMouseEnter={e => { if (currentPage !== item.id) { e.currentTarget.style.color = Colors.text; e.currentTarget.style.background = "rgba(108,99,255,.05)"; } }}
            onMouseLeave={e => { if (currentPage !== item.id) { e.currentTarget.style.color = Colors.muted; e.currentTarget.style.background = "transparent"; } }}>
            <item.Icon size={15} />
            {item.label}
            {item.badge && <span style={{
              marginLeft: "auto", background: Colors.indigo, color: "#fff", fontSize: 9,
              fontWeight: 700, padding: "1px 6px", borderRadius: 20,
              fontFamily: "'JetBrains Mono',monospace"
            }}>{item.badge}</span>}
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 12px", borderTop: `1px solid ${Colors.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 8px", borderRadius: 8, cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(108,99,255,.07)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <Avatar name="Ahmed Hasib" size={28} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Ahmed Hasib</div>
            <div style={{
              fontSize: 10, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace",
              display: "flex", alignItems: "center", gap: 4
            }}><Code2 size={9} />student</div>
          </div>
          <ChevronUp size={13} color={Colors.dimmed} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
