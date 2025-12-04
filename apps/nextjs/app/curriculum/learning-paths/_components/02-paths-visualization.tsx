export function PathsVisualization() {
  // Simple SVG visualization of weeks, branching on weeks 2-4 per role, merging on week 5.
  return (
    <section className="mb-16" id="viz">
      <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-300">
        Visualization: Pivot Weeks 2–6, Merge in Week 7
      </h2>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
        <svg aria-labelledby="pathsTitle" className="h-auto w-full" role="img" viewBox="0 0 900 260">
          <title id="pathsTitle">Learning paths timeline: branch in weeks 2–6 and merge in week 7</title>
          {/* Weeks labels */}
          <g fill="#9CA3AF" fontSize="12">
            <text x="40" y="20">Week 1</text>
            <text x="160" y="20">Week 2</text>
            <text x="280" y="20">Week 3</text>
            <text x="400" y="20">Week 4</text>
            <text x="520" y="20">Week 5</text>
            <text x="640" y="20">Week 6</text>
            <text x="760" y="20">Week 7</text>
            <text x="860" y="20">Week 8</text>
          </g>

          {/* Common baseline (Week 1) */}
          <line stroke="#6366F1" strokeWidth="4" x1="60" x2="140" y1="60" y2="60" />

          {/* Branches for roles (Weeks 2–6) */}
          {[
            { y: 90, color: "#22C55E", label: "Developer" },
            { y: 130, color: "#F59E0B", label: "Product" },
            { y: 170, color: "#EF4444", label: "Design" },
          ].map((r) => (
            <g key={r.label}>
              {/* Fork from end of week 1 into week 2 position */}
              <line stroke={r.color} strokeWidth="3" x1="140" x2="160" y1="60" y2={r.y} />
              {/* Weeks 2–6 horizontal path */}
              <line stroke={r.color} strokeWidth="3" x1="160" x2="640" y1={r.y} y2={r.y} />
              {/* Labels */}
              <text fill="#6B7280" fontSize="11" x="165" y={r.y - 6}>{r.label}</text>
              {/* Merge into week 7 */}
              <line stroke={r.color} strokeWidth="3" x1="640" x2="760" y1={r.y} y2={120} />
            </g>
          ))}

          {/* Common Week 7 and Week 8 line */}
          <line stroke="#374151" strokeWidth="4" x1="760" x2="860" y1="120" y2="120" />
        </svg>
        <p className="mt-3 text-gray-600 text-sm dark:text-gray-400">
          Weeks 2–6 specialize per role (Developer, Product, Design). In Week 7, paths converge for shared integration,
          then complete capstones in Week 8.
        </p>
      </div>
    </section>
  );
}
