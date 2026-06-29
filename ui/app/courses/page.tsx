"use client";

import { useState } from "react";
import { Plus, Search, Play, BookOpen, Users, User } from "lucide-react";
import { Colors, CourseIcons } from "@/lib/tokens";
import { coursesData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState(false);
  const categories = ["All", "Backend", "Database", "Security", "DevOps"];
  const filtered = coursesData.filter(c => (filter === "All" || c.category === filter) && c.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Courses</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>{coursesData.length} courses on the platform</p>
        </div>
        <Btn onClick={() => setModal(true)}><><Plus size={14} />New Course</></Btn>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }} className="a2">
        <div style={{ position: "relative", maxWidth: 200 }}>
          <div style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: Colors.muted, pointerEvents: "none" }}>
            <Search size={13} />
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses…" style={{ paddingLeft: 28 }} />
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: "5px 13px", borderRadius: 20,
              border: `1px solid ${filter === cat ? Colors.indigo : Colors.border}`,
              background: filter === cat ? "rgba(108,99,255,.13)" : "transparent",
              color: filter === cat ? Colors.indigo : Colors.muted, fontSize: 11, fontWeight: 500, cursor: "pointer", transition: "all .2s"
            }}>{cat}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }} className="a3">
        {filtered.map((course, i) => {
          const Icon = CourseIcons[i % 6];
          return (
            <Card key={course.id} onClick={() => onNavigate("course-detail")} style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}>
              <div style={{
                height: 90, background: `${course.iconColor}18`, display: "flex", alignItems: "center",
                justifyContent: "center", position: "relative", color: course.iconColor
              }}>
                <Icon size={40} />
                <div style={{ position: "absolute", top: 8, right: 8 }}>
                  <Badge color={course.status === "published" ? "green" : "amber"}>{course.status}</Badge>
                </div>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                  <h3 style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
                    lineHeight: 1.3, flex: 1, marginRight: 6
                  }}>{course.title}</h3>
                  <Badge color="indigo">{course.category}</Badge>
                </div>
                <p style={{ color: Colors.muted, fontSize: 11, marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                  <User size={11} />by {course.instructor}
                </p>
                <div style={{ display: "flex", gap: 12, fontSize: 11, color: Colors.muted, marginBottom: 10 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={11} />{course.moduleCount}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Play size={11} />{course.lessonCount}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={11} />{course.enrollmentCount}</span>
                </div>
                {course.progress > 0 ? (
                  <div>
                    <PBar value={course.progress} color={course.progress === 100 ? `linear-gradient(90deg,${Colors.green},${Colors.cyan})` : undefined} />
                    <div style={{
                      fontSize: 10, color: Colors.muted, textAlign: "right", marginTop: 3,
                      fontFamily: "'JetBrains Mono',monospace"
                    }}>{course.progress}%</div>
                  </div>
                ) : (
                  <Btn variant="ghost" small style={{ width: "100%", justifyContent: "center", marginTop: 2 }}>
                    <><Play size={12} />Start Course</>
                  </Btn>
                )}
              </div>
            </Card>
          );
        })}
      </div>
      {modal && <Modal title="Create New Course" onClose={() => setModal(false)}>
        <div>
          <FormField label="Course Title"><input placeholder="e.g. Mastering ASP.NET Core" /></FormField>
          <FormField label="Category"><select>{categories.slice(1).map(c => <option key={c}>{c}</option>)}</select></FormField>
          <FormField label="Description"><textarea placeholder="What will students learn?" rows={3} /></FormField>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><Plus size={13} />Create Course</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default CoursesPage;
