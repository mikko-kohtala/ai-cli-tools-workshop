"use client";

import { developerWeeks } from "./week-data";

export function WeekOverview() {
  const handleClick = (weekNumber: number) => {
    const element = document.getElementById(`week-${weekNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-center font-semibold text-2xl">8-Week Journey</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {developerWeeks.map((week) => {
          const Icon = week.icon;
          return (
            <button
              className={`group cursor-pointer rounded-lg border p-3 text-left transition-all hover:shadow-md ${week.colorClasses.bgLight} hover:border-${week.color}-300 dark:hover:border-${week.color}-700`}
              key={week.weekNumber}
              onClick={() => handleClick(week.weekNumber)}
              type="button"
            >
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-xs ${week.colorClasses.bg} ${week.colorClasses.text}`}
                >
                  W{week.weekNumber}
                </span>
                <Icon className={`h-4 w-4 ${week.colorClasses.text}`} />
              </div>
              <p className="font-medium text-xs leading-tight line-clamp-2">{week.title}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-foreground/50 text-sm">
        <span>Click any week to jump to details</span>
      </div>
    </section>
  );
}
