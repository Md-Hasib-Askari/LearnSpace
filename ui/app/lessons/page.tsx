"use client";

import { useState } from "react";
import { Plus, Play, Pencil, Trash2, Clock } from "lucide-react";
import { Colors } from "@/lib/tokens";
import { modulesData, lessonsData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";

interface LessonsPageProps {
  onNavigate: (page: string) => void;
}

function LessonsPage({ onNavigate }: LessonsPageProps) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Lessons</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>Video lessons with YouTube embedding support</p>
        </div>
        <Btn onClick={() => setModal(true)}><><Plus size={14} />Add Lesson</></Btn>
      </div>
      <Card style={{ padding: 0, overflow: "hidden" }} className="a2">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${Colors.border}` }}>
              {["#", "Title", "Module", "Duration", "Status", ""].map((h, i) => (
                <th key={i} style={{
                  padding: "10px 14px", fontSize: 10, fontWeight: 600, color: Colors.muted,
                  textAlign: "left", textTransform: "uppercase", letterSpacing: ".07em"
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lessonsData.map(lesson => (
              <tr key={lesson.id} style={{ borderBottom: `1px solid rgba(255,255,255,.04)` }}>
                <td style={{ padding: "11px 14px", fontSize: 11, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace" }}>
                  {String(lesson.id).padStart(2, "0")}
                </td>
                <td style={{ padding: "11px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, background: "rgba(108,99,255,.11)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: Colors.indigo
                    }}>
                      <Play size={13} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 12 }}>{lesson.title}</div>
                      <div style={{ fontSize: 10, color: Colors.muted, display: "flex", alignItems: "center", gap: 3 }}>
                        Module {lesson.moduleId}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "11px 14px" }}><span style={{ fontSize: 11, color: Colors.muted }}>Module {lesson.moduleId}</span></td>
                <td style={{ padding: "11px 14px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={11} />{lesson.duration}
                  </span>
                </td>
                <td style={{ padding: "11px 14px" }}><Badge color={lesson.completed ? "green" : "muted"}>{lesson.completed ? "Completed" : "Pending"}</Badge></td>
                <td style={{ padding: "11px 14px" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Btn variant="ghost" small onClick={() => onNavigate("lesson-player")}><><Play size={12} />Play</></Btn>
                    <Btn variant="subtle" small><><Pencil size={12} />Edit</></Btn>
                    <Btn variant="danger" small><Trash2 size={12} /></Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {modal && <Modal title="Add New Lesson" onClose={() => setModal(false)}>
        <div>
          <FormField label="Lesson Title"><input placeholder="e.g. Introduction to Middleware" /></FormField>
          <FormField label="YouTube URL" hint="Paste the full YouTube video URL">
            <input placeholder="https://youtube.com/watch?v=..." />
          </FormField>
          <FormField label="Module"><select>{modulesData.map(m => <option key={m.id}>{m.title}</option>)}</select></FormField>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><Plus size={13} />Add Lesson</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default LessonsPage;
