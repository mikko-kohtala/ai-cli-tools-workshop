"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="border border-border px-2 py-1 font-mono text-xs transition-colors"
        disabled
        type="button"
      >
        [...]
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="border border-border px-2 py-1 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
      onClick={toggleTheme}
      type="button"
    >
      [{theme === "dark" ? "dark" : "light"}]
    </button>
  );
}
