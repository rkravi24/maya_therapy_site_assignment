"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ✅ Ensure client-only logic runs AFTER hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mounted]);

  // ⛔ Prevent rendering until mounted → avoids mismatch
  if (!mounted) return null;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-primary
        transition-transform duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-16 py-6 flex items-center">

        {/* Mobile burger – LEFT */}
        <div className="md:hidden flex flex-col gap-1.5 mr-auto">
          <span className="w-6 h-px bg-textDark" />
          <span className="w-6 h-px bg-textDark" />
        </div>

        {/* Title – RIGHT on mobile */}
        <a
          href="/"
          className="text-xl md:text-3xl font-semibold text-textDark ml-auto md:ml-0"
        >
          Dr. Maya Reynolds, PsyD
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-lg text-textDark ml-auto">
          <a href="#" className="hover:opacity-70 transition">
            Blog
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
