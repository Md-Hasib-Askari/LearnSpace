"use client";

import { useState } from "react";
import { BookOpen, LogIn, UserPlus } from "lucide-react";
import { Colors } from "@/lib/tokens";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import FormField from "@/components/features/ActivityFeed";

interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [tab, setTab] = useState("in");
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh",
      padding: "24px 16px", position: "relative", overflow: "hidden", background: Colors.background
    }}>
      <div style={{
        position: "absolute", top: -80, right: -80, width: 300, height: 300,
        background: "radial-gradient(circle,rgba(108,99,255,.18) 0%,transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60, width: 240, height: 240,
        background: "radial-gradient(circle,rgba(0,212,255,.08) 0%,transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{ width: "100%", maxWidth: 360, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }} className="a1">
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: `linear-gradient(135deg,${Colors.indigo},${Colors.cyan})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 12px", animation: "glow 3s ease infinite"
          }}>
            <BookOpen size={26} color="#fff" />
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700,
            background: `linear-gradient(90deg,${Colors.text},${Colors.cyan})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>LearnSpace</h1>
          <p style={{ color: Colors.muted, fontSize: 11, marginTop: 3 }}>Online Learning Platform · .NET 10 + JWT</p>
        </div>
        <Card style={{ padding: "22px" }} className="a2">
          <div>
            <div style={{
              display: "flex", background: Colors.surface, borderRadius: 8, padding: 3,
              marginBottom: 20, border: `1px solid ${Colors.border}`
            }}>
              {["in", "up"].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{
                  flex: 1, padding: "7px", borderRadius: 6,
                  border: "none", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 12,
                  cursor: "pointer", transition: "all .2s",
                  background: tab === t ? Colors.indigo : "transparent", color: tab === t ? "#fff" : Colors.muted
                }}>
                  {t === "in" ? "Sign In" : "Register"}
                </button>
              ))}
            </div>
            {tab === "in" ? (
              <div>
                <FormField label="Email"><input type="email" placeholder="you@example.com" /></FormField>
                <FormField label="Password"><input type="password" placeholder="••••••••" /></FormField>
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
                  <span style={{ fontSize: 11, color: Colors.indigo, cursor: "pointer" }}>Forgot password?</span>
                </div>
                <Btn onClick={onLogin} style={{ width: "100%", justifyContent: "center" }}>
                  <><LogIn size={14} />Sign In to LearnSpace</>
                </Btn>
              </div>
            ) : (
              <div>
                <FormField label="Full Name"><input placeholder="Your full name" /></FormField>
                <FormField label="Email"><input type="email" placeholder="you@example.com" /></FormField>
                <FormField label="Password"><input type="password" placeholder="Min. 8 characters" /></FormField>
                <FormField label="Join As">
                  <select><option>Student</option><option>Instructor</option><option>Guest</option></select>
                </FormField>
                <Btn onClick={onLogin} style={{ width: "100%", justifyContent: "center" }}>
                  <><UserPlus size={14} />Create Account</>
                </Btn>
              </div>
            )}
          </div>
        </Card>
        <p style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: Colors.dimmed }} className="a3">
          BCrypt · JWT Bearer · Role-based access control
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
