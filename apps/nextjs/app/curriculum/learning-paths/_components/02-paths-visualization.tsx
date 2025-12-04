export function PathsVisualization() {
  // Simple SVG visualization of weeks, branching on weeks 2-4 per role, merging on week 5.
  return (
    <section className="mb-16" id="viz">
      <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-300">
        Visualization: Pivot Weeks 2–4, Merge in Week 5
      </h2>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
        <svg aria-labelledby="pathsTitle" role="img" className="h-auto w-full" viewBox="0 0 800 240">
          <title id="pathsTitle">Learning paths timeline: branch in weeks 2–4 and merge in week 5</title>
          {/* Weeks labels */}
          <g fill="#9CA3AF" fontSize="12">
            <text x="40" y="20">
              Week 1
            </text>
            <text x="180" y="20">
              Week 2
            </text>
            <text x="320" y="20">
              Week 3
            </text>
            <text x="460" y="20">
              Week 4
            </text>
            <text x="600" y="20">
              Week 5
            </text>
            <text x="740" y="20">
              Week 6
            </text>
          </g>

          {/* Common baseline (Week 1) */}
          <line stroke="#6366F1" strokeWidth="4" x1="60" x2="140" y1="60" y2="60" />

          {/* Branches for roles (Weeks 2–4) */}
          {[
            { y: 80, color: "#22C55E", label: "Developer" },
            { y: 110, color: "#EF4444", label: "Designer" },
            { y: 140, color: "#F59E0B", label: "Product" },
            { y: 170, color: "#06B6D4", label: "Sales/CS" },
            { y: 200, color: "#9333EA", label: "Data/Analytics" },
          ].map((r) => (
            <g key={r.label}>
              {/* Fork from end of week 1 into week 2 position */}
              <line stroke={r.color} strokeWidth="3" x1="140" x2="180" y1="60" y2={r.y} />
              {/* Weeks 2–4 horizontal path */}
              <line stroke={r.color} strokeWidth="3" x1="180" x2="500" y1={r.y} y2={r.y} />
              {/* Labels */}
              <text fill="#6B7280" fontSize="11" x="185" y={r.y - 6}>
                {r.label}
              </text>
              {/* Merge into week 5 */}
              <line stroke={r.color} strokeWidth="3" x1="500" x2="600" y1={r.y} y2={120} />
            </g>
          ))}

          {/* Common Week 5 and Week 6 line */}
          <line stroke="#374151" strokeWidth="4" x1="600" x2="740" y1="120" y2="120" />
        </svg>
        <p className="mt-3 text-gray-600 text-sm dark:text-gray-400">
          Weeks 2–4 specialize per role. In Week 5, paths converge for shared DevOps/operations, then complete capstones
          in Week 6.
        </p>
      </div>
    </section>
  );
}
