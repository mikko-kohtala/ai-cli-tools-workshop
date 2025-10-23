"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-2 right-2 border border-border px-2 py-1 text-xs font-mono transition-colors"
        disabled
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
      onClick={toggleTheme}
      className="fixed top-2 right-2 border border-border px-2 py-1 text-xs font-mono transition-colors hover:border-primary hover:text-primary"
      type="button"
    >
      [{theme === "dark" ? "dark" : "light"}]
    </button>
  );
}
