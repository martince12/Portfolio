"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className={`fixed left-0 bottom-[9vh] z-50 h-[58px] w-[128px] rounded-full transition-all duration-500 scale-45 ${
                isDark ? "bg-white/80" : "bg-black/85"
            }`}
        >
      <span
          className={`absolute top-1/2 h-[48px] w-[48px] -translate-y-1/2 rounded-full transition-all duration-500 ${
              isDark
                  ? "left-[6px] bg-[#111111] text-white"
                  : "left-[74px] bg-white text-black"
          } flex items-center justify-center shadow-lg`}
      >
        {isDark ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2" />
                <path d="M12 21v2" />
                <path d="M4.22 4.22l1.42 1.42" />
                <path d="M18.36 18.36l1.42 1.42" />
                <path d="M1 12h2" />
                <path d="M21 12h2" />
                <path d="M4.22 19.78l1.42-1.42" />
                <path d="M18.36 5.64l1.42-1.42" />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M21 12.79A9 9 0 0 1 11.21 3c0-.34.02-.67.05-1A1 1 0 0 0 10 1a10 10 0 1 0 13 13 1 1 0 0 0-1.21-1.21c-.26.04-.52.06-.79.06z" />
            </svg>
        )}
      </span>
        </button>
    );
}