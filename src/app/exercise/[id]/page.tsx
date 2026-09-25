import SavedButton from "@/app/button/SavedButton";
import TodaysPlan from "@/app/button/TodaysPlan";
import { allData } from "@/app/lib/api";
import { Exercise } from "@/app/type/type";
import {
  ArrowLeft,
  Clock3,
  Dumbbell,
  Flame,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExerciseDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const allDatas = await allData();

  const data = allDatas.find(
    (exercise: Exercise) => exercise.id === Number(id),
  );

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0d0f12] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Exercise Not Found</h1>
          <Link
            href="/"
            className="inline-block mt-5 rounded-full bg-lime-400 px-5 py-2 text-black"
          >
            Back to Exercises
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Exercises
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* ================= IMAGE ================= */}
          <div className="overflow-hidden rounded-2xl bg-[#181b20]">
            <Image
              width={300}
              height={300}
              src={data.image}
              alt={data.name}
              className="h-full min-h-125 w-full object-cover"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight uppercase">
              {data.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {data.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {data.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-4 py-1 text-xs font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292d34] bg-[#191c21]">
              <InfoRow
                icon={<Dumbbell size={15} />}
                label="EQUIPMENT"
                value={data.equipment}
              />

              <InfoRow label="DIFFICULTY" value={data.difficulty} />

              <InfoRow label="SETS" value={String(data.sets)} />

              <InfoRow label="REPS" value={data.reps} />

              <InfoRow
                icon={<Clock3 size={15} />}
                label="DURATION"
                value={`${data.duration} min`}
              />

              <InfoRow
                icon={<Flame size={15} />}
                label="CALORIES"
                value={`${data.caloriesBurned} kcal`}
              />

              <InfoRow
                icon={<Star size={15} />}
                label="RATING"
                value={String(data.rating)}
                last
              />
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold uppercase">Instructions</h2>

              <ol className="mt-3 space-y-3">
                {data.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-gray-300"
                  >
                    <span className="font-bold text-lime-400">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="mt-7 flex flex-wrap gap-3">
              <TodaysPlan data={data}/>

              <SavedButton data={data}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ================= INFO ROW ================= */

const InfoRow = ({
  icon,
  label,
  value,
  last = false,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-[#292d34]" : ""
      }`}
    >
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
        {icon}
        {label}
      </div>

      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
};

export default ExerciseDetails;
