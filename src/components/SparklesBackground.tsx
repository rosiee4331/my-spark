const sparklePositions = [
  { top: 5, left: 8, size: 4, delay: 0, duration: 3.2 },
  { top: 12, left: 22, size: 3, delay: 0.8, duration: 2.8 },
  { top: 8, left: 45, size: 5, delay: 1.5, duration: 3.5 },
  { top: 18, left: 65, size: 3, delay: 0.3, duration: 2.5 },
  { top: 6, left: 82, size: 4, delay: 2.1, duration: 3.0 },
  { top: 25, left: 15, size: 3, delay: 1.2, duration: 2.9 },
  { top: 30, left: 38, size: 5, delay: 0.6, duration: 3.3 },
  { top: 22, left: 55, size: 4, delay: 1.8, duration: 2.7 },
  { top: 35, left: 75, size: 3, delay: 2.4, duration: 3.1 },
  { top: 28, left: 90, size: 4, delay: 0.4, duration: 2.6 },
  { top: 42, left: 10, size: 3, delay: 1.0, duration: 3.4 },
  { top: 48, left: 30, size: 5, delay: 1.6, duration: 2.8 },
  { top: 45, left: 50, size: 4, delay: 0.2, duration: 3.2 },
  { top: 55, left: 68, size: 3, delay: 2.0, duration: 2.5 },
  { top: 50, left: 85, size: 4, delay: 0.9, duration: 3.0 },
  { top: 62, left: 20, size: 3, delay: 1.4, duration: 3.5 },
  { top: 68, left: 42, size: 5, delay: 0.7, duration: 2.9 },
  { top: 58, left: 58, size: 4, delay: 2.2, duration: 2.6 },
  { top: 72, left: 78, size: 3, delay: 1.1, duration: 3.3 },
  { top: 78, left: 12, size: 4, delay: 0.5, duration: 2.7 },
  { top: 82, left: 35, size: 3, delay: 1.9, duration: 3.1 },
  { top: 85, left: 55, size: 5, delay: 0.3, duration: 2.8 },
  { top: 75, left: 72, size: 4, delay: 2.5, duration: 3.4 },
  { top: 88, left: 88, size: 3, delay: 1.3, duration: 2.5 },
  { top: 15, left: 92, size: 4, delay: 0.1, duration: 3.0 },
  { top: 38, left: 5, size: 3, delay: 1.7, duration: 2.9 },
  { top: 65, left: 95, size: 4, delay: 0.8, duration: 3.2 },
  { top: 95, left: 48, size: 5, delay: 2.3, duration: 2.6 },
  { top: 92, left: 25, size: 3, delay: 1.5, duration: 3.5 },
  { top: 3, left: 60, size: 4, delay: 0.6, duration: 2.8 },
];

export function SparklesBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {sparklePositions.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size * 3}px`,
            height: `${s.size * 3}px`,
            background: `radial-gradient(circle, color-mix(in oklab, var(--primary) 70%, white) 0%, transparent 70%)`,
            opacity: 0.25,
            animation: `sparkle-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* A few larger soft glow orbs */}
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          top: "15%",
          left: "10%",
          width: "120px",
          height: "120px",
          background: "color-mix(in oklab, var(--primary) 25%, transparent)",
          opacity: 0.3,
          animation: "sparkle-float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          top: "60%",
          left: "75%",
          width: "160px",
          height: "160px",
          background: "color-mix(in oklab, var(--primary) 20%, transparent)",
          opacity: 0.25,
          animation: "sparkle-float 10s ease-in-out 2s infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          top: "80%",
          left: "30%",
          width: "100px",
          height: "100px",
          background: "color-mix(in oklab, var(--primary) 22%, transparent)",
          opacity: 0.3,
          animation: "sparkle-float 7s ease-in-out 1s infinite",
        }}
      />
    </div>
  );
}
