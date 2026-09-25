const Loading = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-pulse">
      {/* ================= HEADER ================= */}
      <div className="space-y-2">
        <div className="h-9 w-52 rounded-md bg-base-300" />
        <div className="h-4 w-72 rounded bg-base-300" />
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-base-300 bg-base-100 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="space-y-3 border-base-300 p-6 md:border-r last:border-r-0"
          >
            <div className="h-4 w-20 rounded bg-base-300" />
            <div className="h-8 w-16 rounded bg-base-300" />
          </div>
        ))}
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        {/* Tabs */}
        <div className="flex rounded-full bg-base-200 p-1">
          <div className="h-10 w-28 rounded-full bg-base-300" />
          <div className="ml-2 h-10 w-20 rounded-full bg-base-300" />
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <div className="h-4 w-14 rounded bg-base-300" />
          <div className="h-12 w-60 rounded-xl border border-base-300 bg-base-200" />
        </div>
      </div>

      {/* ================= EXERCISE CARDS ================= */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 rounded-3xl border border-base-300 bg-base-100 p-4 md:flex-row md:items-center md:justify-between"
        >
          {/* Left Side */}
          <div className="flex gap-4">
            {/* Image */}
            <div className="h-24 w-36 rounded-2xl bg-base-300" />

            {/* Text */}
            <div className="space-y-3">
              <div className="h-6 w-48 rounded bg-base-300" />
              <div className="h-4 w-24 rounded bg-base-300" />

              <div className="flex gap-4">
                <div className="h-3 w-14 rounded bg-base-300" />
                <div className="h-3 w-16 rounded bg-base-300" />
                <div className="h-3 w-12 rounded bg-base-300" />
              </div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <div className="h-11 w-28 rounded-full bg-base-300" />
            <div className="h-11 w-36 rounded-full bg-base-300" />
            <div className="h-5 w-5 rounded-full bg-base-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;