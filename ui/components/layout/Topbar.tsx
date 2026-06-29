"use client";
import { Search, Bell } from "lucide-react";
import { Colors } from "@/lib/tokens";
import Avatar from "@/components/ui/Avatar";

const PAGE_TITLES: Record<string, string> = {
  dashboard: "Dashboard", courses: "Courses", "course-detail": "Course Detail",
  "lesson-player": "Lesson Player", modules: "Modules", lessons: "Lessons",
  quizzes: "Quizzes", enrollments: "Enrollments", progress: "Progress & Analytics",
  users: "Users", settings: "Settings",
};

interface TopbarProps {
  page: string;
}

function Topbar({ page }: TopbarProps) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50, background: "rgba(8,13,26,.92)",
      backdropFilter: "blur(14px)", borderBottom: `1px solid ${Colors.border}`,
      padding: "0 22px", height: 50, display: "flex", alignItems: "center", gap: 14, flexShrink: 0
    }}>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 14 }}>
        {PAGE_TITLES[page] || page}
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{
          background: Colors.card, border: `1px solid ${Colors.border}`, borderRadius: 7, padding: "5px 11px",
          display: "flex", alignItems: "center", gap: 7, color: Colors.muted, fontSize: 11, cursor: "text", width: 180
        }}>
          <Search size={13} />Search…
          <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>⌘K</span>
        </div>
        <div style={{
          width: 30, height: 30, background: Colors.card, border: `1px solid ${Colors.border}`, borderRadius: 7,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          color: Colors.muted, position: "relative"
        }}>
          <Bell size={14} />
          <div style={{
            position: "absolute", top: 6, right: 6, width: 6, height: 6,
            background: Colors.cyan, borderRadius: "50%", border: `1.5px solid ${Colors.background}`
          }} />
        </div>
        <Avatar name="Ahmed Hasib" size={30} />
      </div>
    </div>
  );
}

export default Topbar;
