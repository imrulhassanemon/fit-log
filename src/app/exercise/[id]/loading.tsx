const ExerciseDetailsSkeleton = () => {
  return (
    <section className="animate-pulse max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* ================= LEFT IMAGE ================= */}
        <div className="h-130 w-full rounded-3xl bg-base-300" />

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 w-72 rounded bg-base-300" />
            <div className="h-4 w-full rounded bg-base-300" />
            <div className="h-4 w-5/6 rounded bg-base-300" />
          </div>

          {/* Category Badge */}
          <div className="h-8 w-20 rounded-full bg-base-300" />

          {/* ================= INFO TABLE ================= */}
          <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-base-300 px-5 py-4 last:border-none"
              >
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-base-300" />
                  <div className="h-4 w-24 rounded bg-base-300" />
                </div>

                <div className="h-4 w-20 rounded bg-base-300" />
              </div>
            ))}
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="space-y-4">
            <div className="h-8 w-44 rounded bg-base-300" />

            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-base-300" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-full rounded bg-base-300" />
                  <div className="h-4 w-4/5 rounded bg-base-300" />
                </div>
              </div>
            ))}
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="h-12 w-48 rounded-full bg-base-300" />
            <div className="h-12 w-40 rounded-full bg-base-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetailsSkeleton;