"use client";
import { useControl } from "./ControlProvider";

export default function Logo({ light = false }) {
  const { logo } = useControl();
  const src = logo && logo.preview
    ? logo.preview
    : light
      ? "/brand/datakala-wordmark-white.png"
      : "/brand/datakala-wordmark.png";
  return (
    <span className="logo">
      <img
        className="logo-img"
        src={src}
        alt="دیتاکالا"
        width={160}
        height={54}
      />
    </span>
  );
}
