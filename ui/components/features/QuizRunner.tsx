"use client";
import { useState } from "react";
import { Trophy, BookOpen, ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Colors } from "@/lib/tokens";
import Btn from "@/components/ui/Btn";
import PBar from "@/components/ui/PBar";
import { quizRunnerData } from "@/lib/data";
import type { QuizRunnerData } from "@/lib/types";

interface QuizRunnerProps {
  onBack: () => void;
}

function QuizRunner({ onBack }: QuizRunnerProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const quizData: QuizRunnerData = quizRunnerData;
  const question = quizData.questions[questionIndex];

  if (isDone) {
    const percentage = Math.round(score / quizData.questions.length * 100);
    const isPassed = percentage >= 75;
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "40px 20px", textAlign: "center", gap: 12
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: isPassed ? "rgba(16,229,160,.12)" : "rgba(255,107,107,.12)",
          display: "flex", alignItems: "center", justifyContent: "center", color: isPassed ? Colors.green : Colors.red
        }}>
          {isPassed ? <Trophy size={32} /> : <BookOpen size={32} />}
        </div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700 }}>Quiz Complete!</div>
        <div style={{
          fontSize: 38, fontFamily: "'JetBrains Mono',monospace", fontWeight: 700,
          color: percentage >= 75 ? Colors.green : percentage >= 50 ? Colors.amber : Colors.red
        }}>{score}/{quizData.questions.length}</div>
        <div style={{ color: Colors.muted, fontSize: 12 }}>{percentage}% · {isPassed ? "Passed" : "Needs review"}</div>
        <Btn onClick={onBack} style={{ marginTop: 8 }}>{<><ArrowLeft size={13} />Back to Quizzes</>}</Btn>
      </div>
    );
  }

  function handleSelect(index: number) {
    if (!isChecked) setSelectedIndex(index);
  }

  function handleCheckAnswer() {
    if (selectedIndex === null) return;
    setIsChecked(true);
    if (selectedIndex === question.answerIndex) setScore(s => s + 1);
  }

  function handleNext() {
    if (questionIndex + 1 < quizData.questions.length) {
      setQuestionIndex(i => i + 1);
      setSelectedIndex(null);
      setIsChecked(false);
    } else {
      setIsDone(true);
    }
  }

  return (
    <div style={{ padding: "14px 8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <Btn onClick={onBack} variant="ghost" small>{<><ArrowLeft size={12} />Exit</>}</Btn>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: Colors.muted }}>
          {questionIndex + 1}/{quizData.questions.length}
        </span>
      </div>
      <PBar value={(questionIndex / quizData.questions.length) * 100} height={4} />
      <div style={{
        marginTop: 16, marginBottom: 10, fontFamily: "'Space Grotesk',sans-serif",
        fontSize: 15, fontWeight: 700, lineHeight: 1.4
      }}>{question.text}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {question.options.map((option, i) => {
          let background = "rgba(255,255,255,.03)";
          let borderColor = Colors.border;
          let textColor = Colors.text;
          if (isChecked) {
            if (i === question.answerIndex) {
              background = "rgba(16,229,160,.09)";
              borderColor = Colors.green;
              textColor = Colors.green;
            } else if (i === selectedIndex) {
              background = "rgba(255,107,107,.09)";
              borderColor = Colors.red;
              textColor = Colors.red;
            }
          } else if (i === selectedIndex) {
            background = "rgba(108,99,255,.1)";
            borderColor = Colors.indigo;
          }
          return (
            <div key={i} onClick={() => handleSelect(i)} style={{
              padding: "10px 13px", borderRadius: 9, border: `1px solid ${borderColor}`,
              background, color: textColor, cursor: isChecked ? "default" : "pointer",
              fontSize: 12, fontWeight: 500, transition: "all .2s",
              display: "flex", alignItems: "center", gap: 10
            }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", color: Colors.dimmed, fontSize: 11, width: 16 }}>
                {"ABCD"[i]}.
              </span>
              {option}
              {isChecked && i === question.answerIndex && <CheckCircle size={14} color={Colors.green} style={{ marginLeft: "auto" }} />}
              {isChecked && i === selectedIndex && i !== question.answerIndex && <XCircle size={14} color={Colors.red} style={{ marginLeft: "auto" }} />}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
        {!isChecked
          ? <Btn onClick={handleCheckAnswer}
            style={{ opacity: selectedIndex === null ? .5 : 1 }}>Check Answer</Btn>
          : <Btn onClick={handleNext}>
            <>{questionIndex + 1 < quizData.questions.length ? "Next Question" : "Finish Quiz"}<ArrowRight size={13} /></>
          </Btn>
        }
      </div>
    </div>
  );
}

export default QuizRunner;
