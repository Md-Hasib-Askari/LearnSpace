"use client";
import { useState } from "react";
import { ArrowLeft, Layers, Clock, Play, Film, BarChart2, FileText, CheckCircle, Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { Colors } from "@/lib/tokens";
import { coursesData, lessonsData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import SectionHead from "@/components/ui/SectionHead";

interface LessonPlayerProps {
  onNavigate: (page: string) => void;
}

function LessonPlayer({ onNavigate }: LessonPlayerProps) {
  const [done, setDone] = useState(false);
  const lesson = lessonsData[0];
  const course = coursesData[0];
  return (
    <div>
      <button onClick={() => onNavigate("course-detail")} style={{
        background: "none", border: "none", color: Colors.muted,
        cursor: "pointer", fontSize: 11, marginBottom: 16, display: "flex", alignItems: "center", gap: 5
      }}>
        <ArrowLeft size={13} />Back to Course
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 16 }} className="a1">
        <div>
          <div style={{
            background: "#000", borderRadius: 12, aspectRatio: "16/9", display: "flex",
            alignItems: "center", justifyContent: "center", marginBottom: 14,
            border: `1px solid ${Colors.border}`, position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(108,99,255,.1),rgba(0,212,255,.05))" }} />
            <div style={{ textAlign: "center", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14, background: "rgba(108,99,255,.2)",
                display: "flex", alignItems: "center", justifyContent: "center", color: Colors.indigo
              }}>
                <Film size={28} />
              </div>
              <p style={{ color: Colors.muted, fontSize: 11 }}>YouTube embed · {lesson.title}</p>
              <Btn><><Play size={13} />Play Video</></Btn>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
            <div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 3 }}>{lesson.title}</h2>
              <p style={{ color: Colors.muted, fontSize: 11, display: "flex", alignItems: "center", gap: 5 }}>
                <Layers size={11} />{course.title} · Module {lesson.moduleId} · <Clock size={11} />{lesson.duration}
              </p>
            </div>
            <Btn variant={done ? "success" : "primary"} onClick={() => setDone(!done)}>
              {done ? <><CheckCircle size={13} />Completed</> : <><Circle size={13} />Mark Complete</>}
            </Btn>
          </div>
          <Card style={{ marginBottom: 14 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, fontSize: 12 }}>
                <span style={{ color: Colors.muted, display: "flex", alignItems: "center", gap: 5 }}>
                  <BarChart2 size={13} />Module Progress
                </span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>3 / 6 lessons</span>
              </div>
              <PBar value={50} height={5} />
            </div>
          </Card>
          <Card>
            <div>
              <h4 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, marginBottom: 10, fontSize: 14,
                display: "flex", alignItems: "center", gap: 7
              }}><FileText size={15} color={Colors.indigo} />Lesson Notes</h4>
              <p style={{ color: Colors.muted, fontSize: 12, lineHeight: 1.8 }}>This lesson covers N-Tier Architecture fundamentals — separating presentation, business logic, and data access layers in ASP.NET Core, with live coding of a clean solution structure.</p>
            </div>
          </Card>
        </div>
        <div>
          <SectionHead title="Module 1 Lessons" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {lessonsData.map((ls, i) => (
              <Card key={ls.id} onClick={() => { }} style={{
                padding: "10px 12px", display: "flex", alignItems: "center", gap: 10,
                border: ls.id === 1 ? `1px solid ${Colors.indigo}` : undefined,
                background: ls.id === 1 ? "rgba(108,99,255,.07)" : Colors.card
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 6,
                  background: ls.completed ? "rgba(16,229,160,.1)" : ls.id === 1 ? "rgba(108,99,255,.18)" : "rgba(255,255,255,.04)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  color: ls.completed ? Colors.green : ls.id === 1 ? Colors.indigo : Colors.muted
                }}>
                  {ls.completed ? <CheckCircle size={13} /> : ls.id === 1 ? <Play size={12} />
                    : <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace" }}>{i + 1}</span>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap", color: ls.id === 1 ? Colors.text : Colors.muted
                  }}>{ls.title}</div>
                  <div style={{
                    fontSize: 10, color: Colors.dimmed, fontFamily: "'JetBrains Mono',monospace",
                    display: "flex", alignItems: "center", gap: 3
                  }}><Clock size={9} />{ls.duration}</div>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            <Btn variant="ghost" small><><ChevronLeft size={12} />Prev</></Btn>
            <Btn small>{<>Next<ChevronRight size={12} /></>}</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonPlayer;
