"use client";

import { useState } from "react";
import { User, Lock, Bell, Palette, LogOut, Upload, Check, Save, CheckCircle, Code2, KeyRound, ShieldCheck, Mail, Moon, Sun, Monitor } from "lucide-react";
import { Colors } from "@/lib/tokens";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import FormField from "@/components/features/ActivityFeed";

interface SettingsPageProps {
  onLogout: () => void;
}

function SettingsPage({ onLogout }: SettingsPageProps) {
  const [tab, setTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };
  const tabs = [
    { id: "profile", Icon: User, label: "Profile" },
    { id: "security", Icon: Lock, label: "Security" },
    { id: "notifs", Icon: Bell, label: "Notifications" },
    { id: "appear", Icon: Palette, label: "Appearance" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 18 }} className="a1">
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Settings</h2>
        <p style={{ color: Colors.muted, fontSize: 11 }}>Account preferences and configuration</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 16 }} className="a2">
        <Card style={{ padding: "6px 0", height: "fit-content" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              display: "flex", width: "100%",
              alignItems: "center", gap: 9, padding: "9px 14px",
              background: tab === t.id ? "rgba(108,99,255,.11)" : "transparent",
              color: tab === t.id ? Colors.text : Colors.muted, border: "none", cursor: "pointer",
              borderLeft: tab === t.id ? `2px solid ${Colors.indigo}` : "2px solid transparent",
              fontSize: 12, fontWeight: 500, fontFamily: "'Inter',sans-serif", transition: "all .2s"
            }}>
              <t.Icon size={14} />{t.label}
            </button>
          ))}
          <div style={{ margin: "6px 14px", height: 1, background: Colors.border }} />
          <button onClick={onLogout} style={{
            display: "flex", width: "100%", alignItems: "center", gap: 9,
            padding: "9px 14px", background: "transparent", color: Colors.red, border: "none",
            cursor: "pointer", fontSize: 12, fontWeight: 500, fontFamily: "'Inter',sans-serif"
          }}>
            <LogOut size={14} />Sign Out
          </button>
        </Card>
        <div>
          {tab === "profile" && (
            <Card>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 18 }}>Profile Information</h3>
              <div style={{
                display: "flex", alignItems: "center", gap: 16, marginBottom: 20, padding: 16,
                background: Colors.surface, borderRadius: 10, border: `1px solid ${Colors.border}`
              }}>
                <Avatar name="Ahmed Hasib" size={52} gradient={`linear-gradient(135deg,${Colors.indigo},${Colors.purple})`} />
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16 }}>Ahmed Hasib</div>
                  <div style={{
                    fontSize: 11, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace",
                    display: "flex", alignItems: "center", gap: 5
                  }}><Code2 size={11} />Student · ID #001</div>
                  <Btn variant="ghost" small style={{ marginTop: 7 }}><><Upload size={12} />Change Avatar</></Btn>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FormField label="First Name"><input defaultValue="Ahmed" /></FormField>
                <FormField label="Last Name"><input defaultValue="Hasib" /></FormField>
              </div>
              <FormField label="Email"><input type="email" defaultValue="ahmed@learnspace.io" /></FormField>
              <FormField label="Bio"><textarea defaultValue="Full-stack developer learning .NET architecture patterns." rows={2} /></FormField>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
                <Btn onClick={handleSave}>{saved ? <><Check size={13} />Saved!</> : <><Save size={13} />Save Changes</>}</Btn>
                {saved && <span style={{ fontSize: 11, color: Colors.green, display: "flex", alignItems: "center", gap: 5 }}>
                  <CheckCircle size={13} />Profile updated</span>}
              </div>
            </Card>
          )}
          {tab === "security" && (
            <Card>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 18 }}>Security Settings</h3>
              <div style={{ padding: 14, background: Colors.surface, borderRadius: 9, border: `1px solid ${Colors.border}`, marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <ShieldCheck size={16} color={Colors.green} />
                  <span style={{ fontWeight: 600, fontSize: 12 }}>JWT Authentication Active</span>
                  <Badge color="green">Active</Badge>
                </div>
                <p style={{ fontSize: 11, color: Colors.muted }}>Session secured with a JWT bearer token. Tokens auto-expire for security.</p>
              </div>
              <FormField label="Current Password"><input type="password" placeholder="Current password" /></FormField>
              <FormField label="New Password"><input type="password" placeholder="Min. 8 characters (BCrypt hashed)" /></FormField>
              <FormField label="Confirm New Password"><input type="password" placeholder="Repeat new password" /></FormField>
              <Btn onClick={handleSave}>{saved ? <><Check size={13} />Password Updated</> : <><KeyRound size={13} />Update Password</>}</Btn>
            </Card>
          )}
          {tab === "notifs" && (
            <Card>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Email Notifications</h3>
              <p style={{ color: Colors.muted, fontSize: 11, marginBottom: 18, display: "flex", alignItems: "center", gap: 5 }}>
                <Mail size={13} />SMTP-based notifications via your configured mail server
              </p>
              {[
                ["Course enrollment confirmation", "Sent when you enroll in a new course", true],
                ["Quiz results", "Sent after completing a quiz", true],
                ["Password reset", "Sent when you request a reset", true],
                ["New module available", "Sent when a new module is unlocked", false],
                ["Weekly leaderboard", "Weekly ranking update email", false],
              ].map(([title, desc, on], i, arr) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "12px 0",
                  borderBottom: i < arr.length - 1 ? `1px solid rgba(255,255,255,.04)` : undefined
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 11, color: Colors.muted }}>{desc}</div>
                  </div>
                  <div style={{
                    width: 36, height: 20, borderRadius: 10, background: on ? Colors.indigo : Colors.dimmed,
                    position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0
                  }}>
                    <div style={{
                      position: "absolute", top: 2, left: on ? 18 : 2, width: 16, height: 16,
                      borderRadius: "50%", background: "#fff", transition: "left .2s"
                    }} />
                  </div>
                </div>
              ))}
              <Btn style={{ marginTop: 18 }} onClick={handleSave}>
                {saved ? <><Check size={13} />Saved</> : <><Save size={13} />Save Preferences</>}
              </Btn>
            </Card>
          )}
          {tab === "appear" && (
            <Card>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 18 }}>Appearance</h3>
              <FormField label="Theme">
                <div style={{ display: "flex", gap: 10 }}>
                  {[{ label: "Dark", Icon: Moon }, { label: "Light", Icon: Sun }, { label: "System", Icon: Monitor }].map(t => (
                    <div key={t.label} style={{
                      flex: 1, padding: "10px", border: `1px solid ${t.label === "Dark" ? Colors.indigo : Colors.border}`,
                      borderRadius: 9, textAlign: "center", cursor: "pointer", fontSize: 11, fontWeight: 500,
                      background: t.label === "Dark" ? "rgba(108,99,255,.09)" : "transparent",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                      color: t.label === "Dark" ? Colors.text : Colors.muted
                    }}>
                      <t.Icon size={16} />{t.label}
                    </div>
                  ))}
                </div>
              </FormField>
              <FormField label="Accent Color">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[Colors.indigo, Colors.cyan, Colors.purple, Colors.green, Colors.amber, Colors.red].map(c => (
                    <div key={c} style={{
                      width: 28, height: 28, borderRadius: "50%", background: c, cursor: "pointer",
                      border: c === Colors.indigo ? "3px solid #fff" : "3px solid transparent", transition: "border .2s"
                    }} />
                  ))}
                </div>
              </FormField>
              <FormField label="Font Size">
                <select defaultValue="14px"><option>12px</option><option>14px</option><option>16px</option></select>
              </FormField>
              <Btn onClick={handleSave}>{saved ? <><Check size={13} />Saved</> : <><Palette size={13} />Apply Changes</>}</Btn>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
