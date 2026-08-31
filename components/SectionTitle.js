"use client";
import { useControl } from "./ControlProvider";

// Homepage section heading whose text/size/weight are editable from the Control Panel.
export default function SectionTitle({ id, fallback, className = "sec-title" }) {
  const { sectionTitles } = useControl();
  const t = sectionTitles[id] || {};
  const text = t.text || fallback || "";
  const style = {
    fontSize: t.size ? `${t.size}px` : undefined,
    fontWeight: t.weight || undefined,
  };
  return (
    <h2 className={className} style={style}>
      {text}
    </h2>
  );
}
