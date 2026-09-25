import Link from "next/link";
import { ArrowLeft, Dumbbell, Home, MoveUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className=" bg-[#0D0F12] text-white flex items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        {/* Icon / Illustration */}
        <div className="relative mx-auto  flex h-52 w-52 items-center justify-center">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-[#B9FF00]/10 blur-3xl" />

          {/* Circle */}
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#2A2E36] bg-[#171A20] shadow-2xl">
            {/* Inner circle */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#B9FF00]/40">
              <Dumbbell
                size={64}
                strokeWidth={1.8}
                className="text-[#B9FF00] rotate-45"
              />
            </div>

            {/* Small decorative dots */}
            <span className="absolute left-7 top-10 h-2 w-2 rounded-full bg-[#B9FF00]" />
            <span className="absolute right-8 bottom-9 h-2 w-2 rounded-full bg-[#B9FF00]" />
          </div>
        </div>

        {/* 404 */}
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#B9FF00]/50" />

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B9FF00]">
            Error 404
          </p>

          <span className="h-px w-10 bg-[#B9FF00]/50" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
          Wrong{" "}
          <span className="text-[#B9FF00]">Rep.</span>
        </h1>

        <h2 className="mt-2 text-2xl font-bold text-[#E5E7EB] sm:text-3xl">
          This workout doesn&apos;t exist.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#9299A6] sm:text-lg">
          Looks like you lifted a page that isn&apos;t here. Don&apos;t worry —
          your workout is still waiting for you back on the floor.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#2A2E36] bg-[#171A20] px-6 py-3.5 font-semibold text-[#D1D5DB] transition-all hover:border-[#B9FF00]/40 hover:text-white"
          >
            <Home size={18} />
            Go home
          </Link>
        </div>

        {/* Bottom status */}
        <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-[#252930] bg-[#12151A] px-4 py-2 text-xs text-[#737B89]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF00]" />
          No workout found at this address
        </div>
      </div>
    </main>
  );
}