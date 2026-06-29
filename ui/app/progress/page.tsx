"use client";

import { Trophy, Zap } from "lucide-react";
import { Colors, CourseIcons } from "@/lib/tokens";
import { coursesData, quizzesData, leaderboardData } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Avatar from "@/components/ui/Avatar";
import SectionHead from "@/components/ui/SectionHead";

function ProgressPage() {
  return (
    <div>
      <div style={{ marginBottom: 18 }} className="a1">
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Progress & Analytics</h2>
        <p style={{ color: Colors.muted, fontSize: 11 }}>Your learning journey and performance insights</p>
      </div>
      <Card style={{ marginBottom: 18 }} className="a2">
        <div>
          <SectionHead title="Weekly Learning Hours" />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 100, padding: "6px 0" }}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => {
              const hours = [2, 3, 5, 4, 6, 8, 3][i];
              return (
                <div key={d} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 9, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace" }}>{hours}h</span>
                  <div style={{
                    width: "100%", background: `linear-gradient(0deg,${Colors.indigo},${Colors.cyan})`,
                    borderRadius: "3px 3px 0 0", height: hours * 11, opacity: d === "Sat" ? 1 : .65
                  }} />
                  <span style={{ fontSize: 9, color: Colors.muted }}>{d}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="a3">
        <div>
          <SectionHead title="Course Progress" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {coursesData.map((course, i) => {
              const Icon = CourseIcons[i % 6];
              return (
                <Card key={course.id} style={{ padding: "12px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, background: `${course.iconColor}20`,
                      display: "flex", alignItems: "center", justifyContent: "center", color: course.iconColor
                    }}>
                      <Icon size={14} />
                    </div>
                    <span style={{
                      fontWeight: 600, fontSize: 12, flex: 1, overflow: "hidden",
                      textOverflow: "ellipsis", whiteSpace: "nowrap"
                    }}>{course.title}</span>
                    <span style={{
                      fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 600,
                      color: course.progress === 100 ? Colors.green : Colors.text
                    }}>{course.progress}%</span>
                  </div>
                  <PBar value={course.progress} color={course.progress === 100 ? `linear-gradient(90deg,${Colors.green},${Colors.cyan})` : undefined} />
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <SectionHead title="Leaderboard" count="All time" />
          <Card style={{ padding: "2px 0", marginBottom: 16 }}>
            {leaderboardData.map((entry, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
                borderBottom: i < leaderboardData.length - 1 ? `1px solid rgba(255,255,255,.04)` : undefined,
                background: entry.isMe ? "rgba(108,99,255,.06)" : undefined
              }}>
                <div style={{ width: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i < 3 ? <Trophy size={13} color={["#C9A227", "#8A9BAE", "#A0714F"][i]} />
                    : <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: Colors.dimmed }}>#{entry.rank}</span>}
                </div>
                <Avatar name={entry.name} size={26} gradient={entry.gradient} />
                <span style={{ flex: 1, fontSize: 11, fontWeight: 500, color: entry.isMe ? Colors.cyan : Colors.text }}>
                  {entry.name}{entry.isMe && <span style={{ color: Colors.muted, fontSize: 9 }}> (you)</span>}
                </span>
                <div style={{ width: 50 }}><PBar value={entry.percentage} color={`linear-gradient(90deg,${Colors.green},${Colors.cyan})`} height={3} /></div>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: Colors.green,
                  fontWeight: 600, flexShrink: 0
                }}>{entry.points.toLocaleString()}</span>
              </div>
            ))}
          </Card>
          <SectionHead title="Quiz Scores" />
          <Card style={{ padding: "2px 0" }}>
            {quizzesData.filter(q => q.bestScore !== null).map((quiz, i) => (
              <div key={quiz.id} style={{ padding: "10px 14px", borderBottom: i < 2 ? `1px solid rgba(255,255,255,.04)` : undefined }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                    <Zap size={12} color={Colors.indigo} />{quiz.title}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: Colors.green, fontWeight: 600 }}>{quiz.bestScore}%</span>
                </div>
                <PBar value={quiz.bestScore!} color={`linear-gradient(90deg,${Colors.green},${Colors.cyan})`} height={3} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
