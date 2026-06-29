"use client";
import { Play, LayoutDashboard, Target, BookOpen, Clock, CheckSquare, Trophy, Zap, GraduationCap } from "lucide-react";
import { Colors, CourseIcons } from "@/lib/tokens";
import { coursesData, quizzesData, leaderboardData, activityData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Avatar from "@/components/ui/Avatar";
import StatCard from "@/components/ui/StatCard";
import SectionHead from "@/components/ui/SectionHead";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div>
      <Card style={{
        marginBottom: 18, position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", gap: 24, padding: "24px 28px"
      }} className="a1">
        <div style={{
          position: "absolute", top: -60, right: -60, width: 260, height: 260,
          background: "radial-gradient(circle,rgba(108,99,255,.18) 0%,transparent 70%)", pointerEvents: "none"
        }} />
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10,
            fontFamily: "'JetBrains Mono',monospace", color: Colors.cyan, letterSpacing: ".08em",
            textTransform: "uppercase", marginBottom: 10
          }}>
            <div style={{ width: 5, height: 5, background: Colors.cyan, borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Live Session Active
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700,
            lineHeight: 1.25, marginBottom: 8
          }}>
            Continue where you{" "}
            <span style={{
              background: `linear-gradient(90deg,${Colors.indigo},${Colors.cyan})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>left off</span>
            {", Ahmed."}
          </h1>
          <p style={{ color: Colors.muted, fontSize: 12, maxWidth: 360, marginBottom: 18, lineHeight: 1.7 }}>
            You&apos;re <strong style={{ color: Colors.text }}>72%</strong> through{" "}
            <strong style={{ color: Colors.text }}>Advanced .NET Architecture</strong>. Next quiz is unlocked.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Btn onClick={() => onNavigate("lesson-player")}><><Play size={13} />Resume Lesson</></Btn>
            <Btn variant="ghost" onClick={() => onNavigate("courses")}><><LayoutDashboard size={13} />All Courses</></Btn>
          </div>
        </div>
        <div style={{ width: 160, height: 160, position: "relative", flexShrink: 0, zIndex: 1 }}>
          {[160, 118, 78].map((s, i) => {
            const cols = [[Colors.indigo, Colors.indigo + "33"], [Colors.cyan, Colors.cyan + "33"], [Colors.purple, Colors.purple + "33"]];
            return <div key={i} style={{
              position: "absolute", width: s, height: s,
              top: (160 - s) / 2, left: (160 - s) / 2,
              border: "1.5px solid transparent", borderTopColor: cols[i][0], borderRightColor: cols[i][1],
              borderRadius: "50%", animation: `${i % 2 === 0 ? "orbitA" : "orbitB"} ${[11, 7, 4.5][i]}s linear infinite`
            }}>
              <div style={{
                position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)",
                width: 8, height: 8, borderRadius: "50%", background: cols[i][0], boxShadow: `0 0 8px ${cols[i][0]}`
              }} />
            </div>;
          })}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 40, height: 40, background: `linear-gradient(135deg,${Colors.indigo},${Colors.cyan})`,
            borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center",
            animation: "glow 3s ease infinite"
          }}>
            <Target size={18} color="#fff" />
          </div>
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }} className="a2">
        <StatCard Icon={GraduationCap} label="Enrolled Courses" value="6" change="+2 this month" accentColor={Colors.indigo} />
        <StatCard Icon={CheckSquare} label="Lessons Completed" value="47" change="↑ 14%" accentColor={Colors.cyan} />
        <StatCard Icon={Zap} label="Quizzes Taken" value="12" change="3 pending" accentColor={Colors.purple} />
        <StatCard Icon={Clock} label="Learning Time" value="38h" change="this week" accentColor={Colors.green} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 16, marginBottom: 18 }} className="a3">
        <div>
          <SectionHead title="My Courses" count="6 enrolled" action="Browse all" onAction={() => onNavigate("courses")} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {coursesData.slice(0, 4).map((course, i) => {
              const Icon = CourseIcons[i % 6];
              return (
                <Card key={course.id} onClick={() => onNavigate("course-detail")} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: `${course.iconColor}22`,
                    display: "flex", alignItems: "center", justifyContent: "center", color: course.iconColor, flexShrink: 0
                  }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontWeight: 600, fontSize: 12, marginBottom: 2, overflow: "hidden",
                      textOverflow: "ellipsis", whiteSpace: "nowrap"
                    }}>{course.title}</div>
                    <div style={{ display: "flex", gap: 10, fontSize: 10, color: Colors.muted, alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 3 }}><BookOpen size={10} />{course.moduleCount} mods</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Play size={10} />{course.lessonCount} lessons</span>
                    </div>
                  </div>
                  <div style={{ width: 80, flexShrink: 0 }}>
                    <PBar value={course.progress} />
                    <div style={{
                      fontSize: 9, color: Colors.muted, textAlign: "right", marginTop: 2,
                      fontFamily: "'JetBrains Mono',monospace"
                    }}>{course.progress}%</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <SectionHead title="Recent Activity" />
          <Card style={{ padding: "2px 0" }}>
            {activityData.map((activity, i) => (
              <div key={i} style={{
                display: "flex", gap: 10, padding: "9px 14px",
                borderBottom: i < activityData.length - 1 ? `1px solid rgba(255,255,255,.04)` : undefined
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7, background: `${activity.accentColor}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: activity.accentColor, flexShrink: 0, marginTop: 1
                }}>
                  <activity.Icon size={13} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, marginBottom: 1, lineHeight: 1.3 }}>{activity.label}</div>
                  <div style={{ fontSize: 10, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace" }}>{activity.time}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="a4">
        <div>
          <SectionHead title="Quiz Results" count="12 taken" action="Take a quiz" onAction={() => onNavigate("quizzes")} />
          <Card style={{ padding: "2px 0" }}>
            {quizzesData.slice(0, 4).map((quiz, i) => (
              <div key={quiz.id} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
                borderBottom: i < 3 ? `1px solid rgba(255,255,255,.04)` : undefined
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, background: "rgba(108,99,255,.11)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: Colors.indigo
                }}><Zap size={15} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 1 }}>{quiz.title}</div>
                  <div style={{ fontSize: 10, color: Colors.muted }}>{quiz.questionCount} questions · {quiz.timeLimit} min</div>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, fontSize: 13,
                  color: quiz.bestScore ? Colors.green : Colors.muted
                }}>{quiz.bestScore ? `${quiz.bestScore}%` : "—"}</span>
              </div>
            ))}
          </Card>
        </div>
        <div>
          <SectionHead title="Leaderboard" count="This month" action="Full board" onAction={() => onNavigate("progress")} />
          <Card style={{ padding: "2px 0" }}>
            {leaderboardData.map((entry, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "9px 14px",
                borderBottom: i < leaderboardData.length - 1 ? `1px solid rgba(255,255,255,.04)` : undefined,
                background: entry.isMe ? "rgba(108,99,255,.06)" : undefined
              }}>
                <div style={{ width: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i < 3 ? <Trophy size={13} color={["#C9A227", "#8A9BAE", "#A0714F"][i]} />
                    : <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: Colors.dimmed }}>#{entry.rank}</span>}
                </div>
                <Avatar name={entry.name} size={24} gradient={entry.gradient} />
                <span style={{
                  flex: 1, fontSize: 11, fontWeight: 500, color: entry.isMe ? Colors.cyan : Colors.text,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
                }}>
                  {entry.name}{entry.isMe && <span style={{ color: Colors.muted, fontSize: 9 }}> (you)</span>}
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 600,
                  color: Colors.green, flexShrink: 0
                }}>{entry.points.toLocaleString()} pts</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
