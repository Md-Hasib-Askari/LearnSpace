"use client";

import { useState } from "react";
import { Plus, ClipboardList, CheckCircle, RefreshCw, TrendingUp, Eye, UserMinus, UserCheck, Layers } from "lucide-react";
import { Colors } from "@/lib/tokens";
import { coursesData, enrollmentsData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import StatCard from "@/components/ui/StatCard";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";

function EnrollmentsPage() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Enrollments</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>Student course enrollments and progress</p>
        </div>
        <Btn onClick={() => setModal(true)}><><Plus size={14} />Enroll in Course</></Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }} className="a2">
        <StatCard Icon={ClipboardList} label="Total Enrollments" value="6" accentColor={Colors.indigo} />
        <StatCard Icon={CheckCircle} label="Completed" value="1" change="17%" accentColor={Colors.green} />
        <StatCard Icon={RefreshCw} label="In Progress" value="5" accentColor={Colors.cyan} />
        <StatCard Icon={TrendingUp} label="Avg Progress" value="55%" accentColor={Colors.purple} />
      </div>
      <Card style={{ padding: 0, overflow: "hidden" }} className="a3">
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${Colors.border}` }}>
              {["Student", "Course", "Date", "Progress", "Status", ""].map((h, i) => (
                <th key={i} style={{
                  padding: "9px 12px", fontSize: 10, fontWeight: 600, color: Colors.muted,
                  textAlign: "left", textTransform: "uppercase", letterSpacing: ".07em"
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollmentsData.map(enrollment => (
              <tr key={enrollment.id} style={{ borderBottom: `1px solid rgba(255,255,255,.04)` }}>
                <td style={{ padding: "11px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Avatar name={enrollment.student} size={26} />
                    <span style={{ fontSize: 12, fontWeight: 500 }}>{enrollment.student}</span>
                  </div>
                </td>
                <td style={{ padding: "11px 12px" }}>
                  <span style={{ fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>{enrollment.course}</span>
                </td>
                <td style={{ padding: "11px 12px" }}>
                  <span style={{ fontSize: 11, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace" }}>{enrollment.date}</span>
                </td>
                <td style={{ padding: "11px 12px" }}>
                  <div><PBar value={enrollment.progress} /><div style={{ fontSize: 10, color: Colors.muted, textAlign: "right", marginTop: 2 }}>{enrollment.progress}%</div></div>
                </td>
                <td style={{ padding: "11px 12px" }}><Badge color={enrollment.status === "completed" ? "green" : "cyan"}>{enrollment.status}</Badge></td>
                <td style={{ padding: "11px 12px" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Btn variant="ghost" small><><Eye size={12} />View</></Btn>
                    <Btn variant="danger" small><><UserMinus size={12} />Remove</></Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {modal && <Modal title="Enroll in a Course" onClose={() => setModal(false)}>
        <div>
          <FormField label="Select Course"><select>{coursesData.map(c => <option key={c.id}>{c.title}</option>)}</select></FormField>
          <Card style={{ marginBottom: 14, padding: "12px 14px" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9, background: `${coursesData[0].iconColor}20`,
                display: "flex", alignItems: "center", justifyContent: "center", color: coursesData[0].iconColor
              }}>
                <Layers size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 12 }}>{coursesData[0].title}</div>
                <div style={{ fontSize: 11, color: Colors.muted }}>{coursesData[0].moduleCount} modules · {coursesData[0].lessonCount} lessons</div>
              </div>
            </div>
          </Card>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><UserCheck size={13} />Enroll Now</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default EnrollmentsPage;
