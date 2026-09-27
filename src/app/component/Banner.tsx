import Image from "next/image";

const Banner = () => {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#15171c] lg:min-h-[420px] lg:flex-row">
        
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-12 lg:w-[62%] lg:px-12 lg:py-16">
          {/* Small Label */}
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-widest text-lime-400 sm:text-xs">
            Workout Library
          </p>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px]">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <a
            href="#library"
            className="mt-6 inline-flex items-center rounded-md bg-lime-400 px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition duration-200 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] active:scale-95"
          >
            Browse Workouts
          </a>
        </div>

        {/* Workout Image */}
        <div className="relative flex w-full flex-1 items-end justify-center lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:w-[42%]">
          
          {/* Image Glow */}
          <div className="absolute bottom-10 right-1/2 h-48 w-48 translate-x-1/2 rounded-full bg-lime-400/5 blur-3xl sm:h-56 sm:w-56" />

          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={500}
            height={500}
            priority
            className="
              relative z-10
              h-auto
              w-[220px]
              object-contain
              sm:w-[280px]
              md:w-[320px]
              lg:h-[90%]
              lg:w-auto
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;