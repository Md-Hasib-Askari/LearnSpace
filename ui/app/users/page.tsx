"use client";

import { useState } from "react";
import { Search, Pencil, UserMinus, UserPlus, User, BookOpen } from "lucide-react";
import { Colors, RoleColors, RoleIcons } from "@/lib/tokens";
import { usersData } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import { Card } from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import FormField from "@/components/features/ActivityFeed";

function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [modal, setModal] = useState(false);
  const roles = ["All", "Admin", "Staff", "Instructor", "Student", "Guest"];
  const filtered = usersData.filter(u =>
    (roleFilter === "All" || u.role === roleFilter) &&
    (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }} className="a1">
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Users</h2>
          <p style={{ color: Colors.muted, fontSize: 11 }}>Manage platform users and role-based access control</p>
        </div>
        <Btn onClick={() => setModal(true)}><><UserPlus size={14} />Add User</></Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 18 }} className="a2">
        {Object.entries(RoleColors).map(([role, colorConfig]) => {
          const RoleIcon = RoleIcons[role] || User;
          const count = usersData.filter(u => u.role === role).length;
          return (
            <div key={role} onClick={() => setRoleFilter(role)} style={{
              background: colorConfig.background, border: `1px solid ${colorConfig.border}`,
              borderRadius: 10, padding: "12px 14px", cursor: "pointer"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, color: colorConfig.color }}>
                <RoleIcon size={16} />
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 20, fontWeight: 700, color: colorConfig.color, marginBottom: 2 }}>{count}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: colorConfig.color }}>{role}s</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }} className="a3">
        <div style={{ position: "relative", maxWidth: 220 }}>
          <div style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: Colors.muted, pointerEvents: "none" }}>
            <Search size={13} />
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users…" style={{ paddingLeft: 28 }} />
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {roles.map(r => (
            <button key={r} onClick={() => setRoleFilter(r)} style={{
              padding: "5px 12px", borderRadius: 20,
              border: `1px solid ${roleFilter === r ? Colors.indigo : Colors.border}`,
              background: roleFilter === r ? "rgba(108,99,255,.12)" : "transparent",
              color: roleFilter === r ? Colors.indigo : Colors.muted, fontSize: 11, fontWeight: 500, cursor: "pointer", transition: "all .2s"
            }}>{r}</button>
          ))}
        </div>
      </div>
      <Card style={{ padding: 0, overflow: "hidden" }} className="a4">
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${Colors.border}` }}>
              {["User", "Role", "Joined", "Courses", "Status", ""].map((h, i) => (
                <th key={i} style={{
                  padding: "9px 12px", fontSize: 10, fontWeight: 600, color: Colors.muted,
                  textAlign: "left", textTransform: "uppercase", letterSpacing: ".07em"
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => {
              const colorConfig = RoleColors[u.role] || RoleColors.Guest;
              const RoleIcon = RoleIcons[u.role] || User;
              return (
                <tr key={u.id} style={{ borderBottom: `1px solid rgba(255,255,255,.04)` }}>
                  <td style={{ padding: "10px 12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <Avatar name={u.name} size={28} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 12 }}>{u.name}</div>
                        <div style={{ fontSize: 10, color: Colors.muted }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 20,
                      background: colorConfig.background, color: colorConfig.color, border: `1px solid ${colorConfig.border}`,
                      display: "inline-flex", alignItems: "center", gap: 5
                    }}>
                      <RoleIcon size={11} />{u.role}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ fontSize: 11, color: Colors.muted, fontFamily: "'JetBrains Mono',monospace" }}>{u.joined}</span>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", display: "flex", alignItems: "center", gap: 4 }}>
                      <BookOpen size={11} color={Colors.muted} />{u.courses}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px" }}><Badge color={u.active ? "green" : "red"}>{u.active ? "active" : "inactive"}</Badge></td>
                  <td style={{ padding: "10px 12px" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Btn variant="subtle" small><><Pencil size={12} />Edit</></Btn>
                      <Btn variant="danger" small><><UserMinus size={12} />Remove</></Btn>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      {modal && <Modal title="Add New User" onClose={() => setModal(false)}>
        <div>
          <FormField label="Full Name"><input placeholder="Full name" /></FormField>
          <FormField label="Email"><input type="email" placeholder="user@example.com" /></FormField>
          <FormField label="Role"><select>{roles.slice(1).map(r => <option key={r}>{r}</option>)}</select></FormField>
          <FormField label="Temporary Password"><input type="password" placeholder="Temporary password" /></FormField>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Btn variant="ghost" onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}>Cancel</Btn>
            <Btn onClick={() => setModal(false)} style={{ flex: 1, justifyContent: "center" }}><><UserPlus size={13} />Create User</></Btn>
          </div>
        </div>
      </Modal>}
    </div>
  );
}

export default UsersPage;
