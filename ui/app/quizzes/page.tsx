"use client";

import { useState } from "react";
import { Plus, Zap, CheckCircle, BarChart2, Clock, Play, RefreshCw, HelpCircle, ClipboardList } from "lucide-react";
import { Colors } from "@/lib/tokens";
import { coursesData, quizzesData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import PBar from "@/components/ui/PBar";
import Badge from "@/components/ui/Badge";
import StatCard from "@/components/ui/StatCard";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";
import QuizRunner from "@/components/features/QuizRunner";

function QuizzesPage() {
  const [modal, setModal] = useState(false);
  const [running, setRunning] = useState(false);
  if (running) return <QuizRunner onBack={() => setRunning(false)} />;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Quizzes</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>Multiple-choice quizzes with auto-grading</p>
        </div>
        <Btn onClick={() => setModal(true)}><><Plus size={14} />Create Quiz</></Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }} className="a2">
        <StatCard Icon={Zap} label="Available" value="6" accentColor={Colors.indigo} />
        <StatCard Icon={CheckCircle} label="Completed" value="3" change="50%" accentColor={Colors.green} />
        <StatCard Icon={BarChart2} label="Avg Score" value="91%" change="High" accentColor={Colors.cyan} />
        <StatCard Icon={Clock} label="Pending" value="3" accentColor={Colors.amber} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }} className="a3">
        {quizzesData.map(quiz => (
          <Card key={quiz.id} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: "rgba(108,99,255,.11)",
                display: "flex", alignItems: "center", justifyContent: "center", color: Colors.indigo
              }}>
                <ClipboardList size={20} />
              </div>
              <Badge color={quiz.status === "done" ? "green" : "amber"}>{quiz.status === "done" ? "Completed" : "Pending"}</Badge>
            </div>
            <h3 style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
              marginBottom: 7, lineHeight: 1.4, flex: 1
            }}>{quiz.title}</h3>
            <div style={{ display: "flex", gap: 12, fontSize: 11, color: Colors.muted, marginBottom: 12 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><HelpCircle size={11} />{quiz.questionCount} qs</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} />{quiz.timeLimit} min</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><RefreshCw size={11} />{quiz.attempts}</span>
            </div>
            {quiz.bestScore !== null && (
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 11 }}>
                  <span style={{ color: Colors.muted }}>Best Score</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", color: Colors.green, fontWeight: 600 }}>{quiz.bestScore}%</span>
                </div>
                <PBar value={quiz.bestScore} color={`linear-gradient(90deg,${Colors.green},${Colors.cyan})`} />
              </div>
            )}
            <Btn variant={quiz.status === "done" ? "ghost" : "primary"} style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setRunning(true)}>
              {quiz.status === "done" ? <><RefreshCw size={13} />Retake</> : <><Play size={13} />Start Quiz</>}
            </Btn>
          </Card>
        ))}
      </div>
      {modal && <Modal title="Create New Quiz" onClose={() => setModal(false)}>
        <div>
          <FormField label="Quiz Title"><input placeholder="e.g. Dependency Injection Quiz" /></FormField>
          <FormField label="Course"><select>{coursesData.map(c => <option key={c.id}>{c.title}</option>)}</select></FormField>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormField label="Questions"><input type="number" defaultValue="5" /></FormField>
            <FormField label="Time Limit (min)"><input type="number" defaultValue="10" /></FormField>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><Plus size={13} />Create Quiz</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default QuizzesPage;
