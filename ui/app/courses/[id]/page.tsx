"use client";

import { useState } from "react";
import { ArrowLeft, User, BookOpen, Play, Users, ArrowRight, CheckCircle, Film, Clock, Info, ListChecks, Check } from "lucide-react";
import { Colors, CourseIcons } from "@/lib/tokens";
import { coursesData, modulesData, lessonsData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Badge from "@/components/ui/Badge";
import SectionHead from "@/components/ui/SectionHead";

interface CourseDetailPageProps {
  onNavigate: (page: string) => void;
}

function CourseDetailPage({ onNavigate }: CourseDetailPageProps) {
  const course = coursesData[0];
  const [tab, setTab] = useState("modules");
  const CourseIcon = CourseIcons[0];
  return (
    <div>
      <button onClick={() => onNavigate("courses")} style={{
        background: "none", border: "none", color: Colors.muted,
        cursor: "pointer", fontSize: 11, marginBottom: 16, display: "flex", alignItems: "center", gap: 5
      }}>
        <ArrowLeft size={13} />Back to Courses
      </button>
      <div style={{ display: "flex", gap: 20, marginBottom: 20, alignItems: "flex-start" }} className="a1">
        <div style={{
          width: 64, height: 64, borderRadius: 14, background: `${course.iconColor}20`,
          display: "flex", alignItems: "center", justifyContent: "center", color: course.iconColor, flexShrink: 0
        }}>
          <CourseIcon size={30} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700 }}>{course.title}</h2>
            <Badge color="green">{course.status}</Badge><Badge color="indigo">{course.category}</Badge>
          </div>
          <p style={{ color: Colors.muted, fontSize: 11, marginBottom: 8, display: "flex", alignItems: "center", gap: 5 }}>
            <User size={11} />Instructor: <strong style={{ color: Colors.text }}>{course.instructor}</strong>
          </p>
          <div style={{ display: "flex", gap: 18, fontSize: 11, color: Colors.muted }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={12} />{course.moduleCount} Modules</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Play size={12} />{course.lessonCount} Lessons</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={12} />{course.enrollmentCount} Students</span>
          </div>
        </div>
        <div style={{ width: 160, flexShrink: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontSize: 11, color: Colors.muted }}>Progress</span>
            <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>{course.progress}%</span>
          </div>
          <PBar value={course.progress} height={5} />
          <Btn style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
            onClick={() => onNavigate("lesson-player")}>
            <><Play size={13} />Continue</>
          </Btn>
        </div>
      </div>
      <div style={{ display: "flex", gap: 2, marginBottom: 16, borderBottom: `1px solid ${Colors.border}` }} className="a2">
        {[{ id: "modules", Icon: BookOpen }, { id: "lessons", Icon: Play }, { id: "overview", Icon: Info }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "8px 16px", border: "none",
            background: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600,
            transition: "all .2s", color: tab === t.id ? Colors.text : Colors.muted,
            borderBottom: tab === t.id ? `2px solid ${Colors.indigo}` : "2px solid transparent",
            display: "flex", alignItems: "center", gap: 6, textTransform: "capitalize"
          }}>
            <t.Icon size={13} />{t.id}
          </button>
        ))}
      </div>
      {tab === "modules" && (
        <div className="a3">
          <SectionHead title="Modules" count={`${modulesData.filter(m => m.courseId === 1).length} total`} action="Add Module" onAction={() => { }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {modulesData.filter(m => m.courseId === 1).map(m => (
              <Card key={m.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, background: "rgba(108,99,255,.11)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 12, color: Colors.indigo, flexShrink: 0
                }}>
                  {String(m.order).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{m.title}</div>
                  <div style={{ fontSize: 11, color: Colors.muted, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}>
                    <Play size={11} />{m.lessonCount} lessons
                  </div>
                </div>
                <Badge color={m.status === "published" ? "green" : "amber"}>{m.status}</Badge>
                <Btn variant="ghost" small onClick={() => onNavigate("lessons")}><><ArrowRight size={12} />Lessons</></Btn>
              </Card>
            ))}
          </div>
        </div>
      )}
      {tab === "lessons" && (
        <div className="a3">
          <SectionHead title="All Lessons" count={`${course.lessonCount} total`} action="Add Lesson" onAction={() => { }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {lessonsData.map(lesson => (
              <Card key={lesson.id} onClick={() => onNavigate("lesson-player")} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 16px" }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 7,
                  background: lesson.completed ? "rgba(16,229,160,.1)" : "rgba(108,99,255,.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: lesson.completed ? Colors.green : Colors.indigo, flexShrink: 0
                }}>
                  {lesson.completed ? <CheckCircle size={15} /> : <Play size={14} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 1 }}>{lesson.title}</div>
                  <div style={{ fontSize: 10, color: Colors.muted, display: "flex", alignItems: "center", gap: 4 }}>
                    <Film size={10} />Module {lesson.moduleId} · Video
                  </div>
                </div>
                <span style={{
                  fontSize: 11, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace",
                  display: "flex", alignItems: "center", gap: 4
                }}><Clock size={11} />{lesson.duration}</span>
                {lesson.completed && <Badge color="green">Done</Badge>}
              </Card>
            ))}
          </div>
        </div>
      )}
      {tab === "overview" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="a3">
          <Card>
            <div>
              <h4 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, marginBottom: 12, fontSize: 14,
                display: "flex", alignItems: "center", gap: 8
              }}><Info size={16} color={Colors.indigo} />About This Course</h4>
              <p style={{ color: Colors.muted, fontSize: 12, lineHeight: 1.8 }}>Master N-Tier architecture patterns with ASP.NET Core. Learn Repository Pattern, Dependency Injection, AutoMapper, and EF Core in a production-ready codebase.</p>
            </div>
          </Card>
          <Card>
            <div>
              <h4 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, marginBottom: 12, fontSize: 14,
                display: "flex", alignItems: "center", gap: 8
              }}><ListChecks size={16} color={Colors.green} />What You&apos;ll Learn</h4>
              <ul style={{ color: Colors.muted, fontSize: 12, lineHeight: 2.2, paddingLeft: 0, listStyle: "none" }}>
                {["N-Tier architecture fundamentals", "Repository & Unit of Work patterns", "Dependency Injection in .NET 10", "AutoMapper configuration", "Middleware pipeline internals"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}><Check size={12} color={Colors.green} />{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default CourseDetailPage;
