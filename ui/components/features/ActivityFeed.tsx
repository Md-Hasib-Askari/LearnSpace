import { Colors } from "@/lib/tokens";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  hint?: string;
}

const FormField = ({ label, children, hint }: FormFieldProps) => (
  <div style={{ marginBottom: 13 }}>
    <label style={{
      display: "block", fontSize: 10, fontWeight: 600, color: Colors.muted, marginBottom: 5,
      textTransform: "uppercase", letterSpacing: ".07em"
    }}>{label}</label>
    {children}
    {hint && <p style={{ fontSize: 10, color: Colors.dimmed, marginTop: 3 }}>{hint}</p>}
  </div>
);

export default FormField;
