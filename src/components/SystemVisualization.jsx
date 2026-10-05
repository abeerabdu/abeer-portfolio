"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// SVG node-graph "system visualization" — represents connecting business nodes.
// Subtle parallax on pointer move; respects reduced motion.
const nodes = [
  { id: "users", label: "Users", x: 120, y: 90 },
  { id: "api", label: "API", x: 300, y: 60 },
  { id: "auth", label: "Auth", x: 460, y: 130 },
  { id: "db", label: "Data", x: 250, y: 230 },
  { id: "services", label: "Services", x: 90, y: 250 },
  { id: "report", label: "Reports", x: 430, y: 280 },
];

const edges = [
  ["users", "api"],
  ["api", "auth"],
  ["api", "db"],
  ["db", "services"],
  ["db", "report"],
  ["api", "report"],
  ["services", "users"],
];

export default function SystemVisualization() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const cy = (e.clientY - rect.top - rect.height / 2) / rect.height;
    ref.current.style.setProperty("--px", `${cx * 12}px`);
    ref.current.style.setProperty("--py", `${cy * 12}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.setProperty("--px", "0px");
          ref.current.style.setProperty("--py", "0px");
        }
      }}
      className="relative aspect-square w-full max-w-md mx-auto"
      style={{ transform: "translate(var(--px,0), var(--py,0))", transition: "transform 0.4s ease-out" }}
      aria-label="System diagram showing connected business nodes"
      role="img"
    >
      <svg viewBox="0 0 540 360" className="w-full h-full">
        <title>System visualization — connected business nodes</title>
        <desc>An abstract node graph representing users, API, auth, data, services, and reports connected together.</desc>

        {/* edges */}
        {edges.map(([a, b], i) => {
          const na = nodes.find((n) => n.id === a);
          const nb = nodes.find((n) => n.id === b);
          return (
            <g key={i}>
              <line
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke="hsl(var(--border))" strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {!reduce && (
                <motion.circle
                  r="2.5"
                  fill="hsl(var(--accent))"
                  initial={{ cx: na.x, cy: na.y }}
                  animate={{ cx: nb.x, cy: nb.y }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                />
              )}
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x} cy={n.y} r="26"
              fill="hsl(var(--card))"
              stroke="hsl(var(--foreground))"
              strokeWidth="1.5"
              initial={reduce ? false : { scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <motion.circle
              cx={n.x} cy={n.y} r="3"
              fill="hsl(var(--accent))"
              animate={reduce ? {} : { scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <text
              x={n.x} y={n.y + 44}
              textAnchor="middle"
              className="font-mono"
              fontSize="11"
              fill="hsl(var(--muted-foreground))"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="absolute top-0 left-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        SYS_DIAGRAM_v1
      </div>
      <div className="absolute bottom-0 right-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        NODES: {nodes.length}
      </div>
    </div>
  );
}