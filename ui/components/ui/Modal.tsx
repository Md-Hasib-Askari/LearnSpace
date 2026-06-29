"use client";
import { X } from "lucide-react";
import { Colors } from "@/lib/tokens";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => (
  <div onClick={e => e.target === e.currentTarget && onClose()} style={{
    position: "absolute", inset: 0, background: "rgba(0,0,0,.72)", backdropFilter: "blur(6px)",
    zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, borderRadius: "inherit"
  }}>
    <div style={{
      background: Colors.surface, border: `1px solid ${Colors.border}`, borderRadius: "14px",
      padding: "22px", width: "100%", maxWidth: 460, animation: "fadeUp .22s ease"
    }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15 }}>{title}</span>
        <button onClick={onClose} style={{
          marginLeft: "auto", background: "none", border: "none",
          color: Colors.muted, cursor: "pointer", display: "flex", alignItems: "center"
        }}><X size={18} /></button>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
