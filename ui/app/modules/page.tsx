"use client";

import { useState } from "react";
import { Plus, Play, Pencil, Trash2, List, Hash } from "lucide-react";
import { Colors, CourseIcons } from "@/lib/tokens";
import { coursesData, modulesData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";

interface ModulesPageProps {
  onNavigate: (page: string) => void;
}

function ModulesPage({ onNavigate }: ModulesPageProps) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Modules</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>Course modules and content structure</p>
        </div>
        <Btn onClick={() => setModal(true)}><><Plus size={14} />Add Module</></Btn>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }} className="a2">
        {modulesData.map(module => {
          const course = coursesData.find(c => c.id === module.courseId);
          const Icon = CourseIcons[(module.courseId - 1) % 6];
          return (
            <Card key={module.id} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: `${course?.iconColor || Colors.indigo}20`,
                display: "flex", alignItems: "center", justifyContent: "center", color: course?.iconColor || Colors.indigo, flexShrink: 0
              }}>
                <Icon size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, fontSize: 13 }}>{module.title}</span>
                  <Badge color={module.status === "published" ? "green" : "amber"}>{module.status}</Badge>
                </div>
                <div style={{ fontSize: 11, color: Colors.muted, display: "flex", alignItems: "center", gap: 12 }}>
                  <span>{course?.title}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Play size={11} />{module.lessonCount} lessons</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", display: "flex", alignItems: "center", gap: 4 }}>
                    <Hash size={10} />Order {module.order}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                <Btn variant="ghost" small onClick={() => onNavigate("lessons")}><><List size={12} />Lessons</></Btn>
                <Btn variant="subtle" small><><Pencil size={12} />Edit</></Btn>
                <Btn variant="danger" small><><Trash2 size={12} />Delete</></Btn>
              </div>
            </Card>
          );
        })}
      </div>
      {modal && <Modal title="Add New Module" onClose={() => setModal(false)}>
        <div>
          <FormField label="Module Title"><input placeholder="e.g. Advanced Middleware Patterns" /></FormField>
          <FormField label="Course"><select>{coursesData.map(c => <option key={c.id}>{c.title}</option>)}</select></FormField>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><Plus size={13} />Add Module</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default ModulesPage;
