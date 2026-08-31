export default function Logo({ light = false }) {
  return (
    <span className="logo">
      <img
        className="logo-img"
        src={light ? "/brand/datakala-wordmark-white.png" : "/brand/datakala-wordmark.png"}
        alt="دیتاکالا"
        width={160}
        height={54}
      />
    </span>
  );
}
