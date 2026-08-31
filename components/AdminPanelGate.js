"use client";
import dynamic from "next/dynamic";
import { useControl } from "./ControlProvider";

// Lazy-load the Control Panel: its JS is fetched only after the user is
// authenticated as admin via /admin. Non-admins never load this bundle.
const ControlPanel = dynamic(() => import("./ControlPanel"), { ssr: false });

export default function AdminPanelGate() {
  const { isAdmin } = useControl();
  if (!isAdmin) return null;
  return <ControlPanel />;
}
