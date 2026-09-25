export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* ================= HERO SKELETON ================= */}
      <section className="mx-auto mb-12 max-w-7xl px-4 pt-8">
        <div className="animate-pulse overflow-hidden rounded-3xl bg-gray-200">
          <div className="grid min-h-95 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="h-5 w-32 rounded-full bg-gray-300" />

              <div className="space-y-3">
                <div className="h-12 w-full max-w-lg rounded-lg bg-gray-300" />
                <div className="h-12 w-4/5 max-w-lg rounded-lg bg-gray-300" />
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full max-w-md rounded bg-gray-300" />
                <div className="h-4 w-5/6 max-w-md rounded bg-gray-300" />
              </div>

              <div className="h-12 w-36 rounded-xl bg-gray-300" />
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="h-64 w-full max-w-md rounded-3xl bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="mb-8 animate-pulse space-y-3">
          <div className="h-8 w-56 rounded-lg bg-gray-200" />
          <div className="h-4 w-80 rounded bg-gray-200" />
        </div>

        {/* ================= 4 ROW × 3 COLUMN ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Card Image */}
              <div className="h-56 w-full bg-gray-200" />

              {/* Card Content */}
              <div className="space-y-4 p-5">
                {/* Title */}
                <div className="h-6 w-3/4 rounded bg-gray-200" />

                {/* Description */}
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />

                {/* Info */}
                <div className="flex gap-3">
                  <div className="h-7 w-20 rounded-full bg-gray-200" />
                  <div className="h-7 w-24 rounded-full bg-gray-200" />
                </div>

                {/* Button */}
                <div className="h-10 w-full rounded-xl bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
