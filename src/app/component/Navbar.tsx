"use client";

import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkouts = pathname === "/workouts" || pathname.startsWith("/workouts/");

  const isPlan = pathname === "/my-plan" || pathname.startsWith("/my-plan/");

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/70 bg-[#0b0c0e]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-black">
            <Dumbbell size={20} strokeWidth={2.8} />
          </div>

          <span className="text-lg font-extrabold tracking-tight text-white">
            FIT<span className="text-lime-400">LOG</span>
          </span>
        </Link>

        {/* ================= DESKTOP TOGGLE ================= */}
        <div className="hidden md:block">
          <Toggle isWorkouts={isWorkouts} isPlan={isPlan} />
        </div>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[11px] font-bold text-black transition group-hover:scale-110">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 px-1.5 text-[11px] text-zinc-400 transition group-hover:border-lime-400 group-hover:text-lime-400">
              0
            </span>
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-lime-400 hover:text-lime-400 md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-zinc-800/70 bg-[#0b0c0e] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-75 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="space-y-5 px-4 py-5 sm:px-6">
          {/* Mobile Toggle */}
          <Toggle isWorkouts={isWorkouts} isPlan={isPlan} mobile />

          {/* Mobile Links */}
          <div className="grid grid-cols-2 gap-3">
            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#111214] px-4 py-3 text-sm text-zinc-400 transition hover:border-lime-400/50 hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[11px] font-bold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/saved"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#111214] px-4 py-3 text-sm text-zinc-400 transition hover:border-lime-400/50 hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 px-1.5 text-[11px]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* =====================================================
   TOGGLE COMPONENT
===================================================== */

type ToggleProps = {
  isWorkouts: boolean;
  isPlan: boolean;
  mobile?: boolean;
};

const Toggle = ({ isWorkouts, isPlan, mobile = false }: ToggleProps) => {
  return (
    <div
      className={`relative flex rounded-full border border-zinc-800 bg-[#111214] p-1 ${
        mobile ? "w-full" : "h-11"
      }`}
    >
      {/* Sliding Background */}
      <div
        className={`absolute top-1 h-9 rounded-full bg-lime-400 transition-transform duration-300 ease-out ${
          mobile ? "w-1/2" : "w-24"
        } ${
          isPlan
            ? mobile
              ? "translate-x-full"
              : "translate-x-24"
            : "translate-x-0"
        }`}
      />

      {/* Workouts */}
      <Link
        href="/"
        className={`relative z-10 flex h-9 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
          mobile ? "w-1/2" : "w-24"
        } ${isWorkouts ? "text-black" : "text-zinc-500 hover:text-white"}`}
      >
        Workouts
      </Link>

      {/* My Plan */}
      <Link
        href="/my-plan"
        className={`relative z-10 flex h-9 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
          mobile ? "w-1/2" : "w-24"
        } ${isPlan ? "text-black" : "text-zinc-500 hover:text-white"}`}
      >
        My Plan
      </Link>
    </div>
  );
};

export default Navbar;
