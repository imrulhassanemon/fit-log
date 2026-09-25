"use client";

import { Dumbbell } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <header className="border-b border-[#25262b] bg-[#0d0f12]">
      <nav className="mx-auto flex min-h-15 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Dumbbell className="text-lime-400" size={20} strokeWidth={2.5} />

          <span className="text-sm font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-right text-[9px] leading-4 text-gray-500 sm:text-[11px]">
          © 2026 FitLog — Workout library. Train hard, log honest.
        </p>
      </nav>
    </header>
  );
};

export default Footer;
