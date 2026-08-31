"use client";
import { useControl } from "./ControlProvider";

// Renders its children only when the named section is enabled in the Control Panel.
export default function Section({ id, children }) {
  const { sections } = useControl();
  if (sections[id] === false) return null;
  return <>{children}</>;
}
