"use client";

import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import { GymContext } from "../contex/GymProvider";
import Image from "next/image";
import { Exercise } from "../type/type";
import toast from "react-hot-toast";

export default function Page() {
  const { todaysPlan, setTodaysPlan, saved, setSaved } = useContext(GymContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState("duration");
  const [completed, setCompleted] = useState<number[]>([]);

  const currentExercises = activeTab === "today" ? todaysPlan : saved;

  const sortedExercises = useMemo(() => {
    const data = [...currentExercises];

    if (sortBy === "duration") {
      data.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      data.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }

    if (sortBy === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [currentExercises, sortBy]);

  const totalMinutes = currentExercises.reduce(
    (total: number, exercise: Exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total: number, exercise: Exercise) => total + exercise.caloriesBurned,
    0,
  );

  const markAsDone = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
  );
  return toast.success("marked the workout done", {position:'top-right'})
  };

  const removeExercise = (id: number) => {
    if (activeTab === "today") {
      setTodaysPlan((prev: Exercise[]) =>
        prev.filter((exercise: Exercise) => exercise.id !== id),
      );
      toast.success("Successfully Removed", { position: "top-right" });
    } else {
      setSaved((prev: Exercise[]) =>
        prev.filter((exercise: Exercise) => exercise.id !== id),
      );
      toast.success("Successfully Removed", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-275">
        {/* ================= HEADER ================= */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight">
            {activeTab === "today" ? "MY PLAN" : "SAVED"}
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            {activeTab === "today"
              ? "Cap of five lifts for today. Finish them, then load more."
              : "Your saved exercises and workouts."}
          </p>
        </div>

        {/* ================= SUMMARY ================= */}
        {currentExercises.length > 0 && (
          <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] md:grid-cols-3">
            {/* Exercises */}
            <div className="border-b border-[#292d34] p-5 md:border-b-0 md:border-r">
              <p className="text-xs text-gray-400">Exercises</p>

              <p className="mt-1 text-3xl font-bold text-[#baff00]">
                {currentExercises.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#292d34] p-5 md:border-b-0 md:border-r">
              <p className="text-xs text-gray-400">Minutes</p>

              <p className="mt-1 text-3xl font-bold">{totalMinutes}</p>
            </div>

            {/* Calories */}
            <div className="p-5">
              <p className="text-xs text-gray-400">Calories</p>

              <p className="mt-1 text-3xl font-bold">{totalCalories}</p>
            </div>
          </div>
        )}

        {/* ================= TABS + SORT ================= */}
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          {/* Tabs */}
          <div className="inline-flex w-fit rounded-2xl bg-[#191c22] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "today"
                  ? "bg-[#0f1115] text-[#baff00] shadow"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#0f1115] text-[#baff00] shadow"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          {currentExercises.length > 0 && (
            <div className="w-full md:w-70">
              <label className="mb-2 block text-sm font-medium">Sort By</label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-[#3a3d43] bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#baff00]"
              >
                <option value="duration" className="bg-[#191c22]">
                  Duration
                </option>

                <option value="calories" className="bg-[#191c22]">
                  Calories
                </option>

                <option value="rating" className="bg-[#191c22]">
                  Rating
                </option>
              </select>
            </div>
          )}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {currentExercises.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#343840] bg-[#15181d] px-6 py-20 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#20242b] text-3xl">
              {activeTab === "today" ? "🏋️" : "☆"}
            </div>

            <h2 className="text-xl font-bold">
              {activeTab === "today"
                ? "Nothing in today&apos;s plan"
                : "No saved exercises"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === "today"
                ? "Your workout plan is empty. Add some exercises to start your workout."
                : "You haven't saved any exercises yet. Save your favorite exercises and they will appear here."}
            </p>

            <Link href={"/"}>
              <button className="mt-6 rounded-xl bg-[#baff00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c8ff33]">
                {activeTab === "today" ? "Add Exercise" : "Browse Exercises"}
              </button>
            </Link>
          </div>
        ) : (
          /* ================= EXERCISE CARDS ================= */
          <div className="space-y-4">
            {sortedExercises.map((exercise) => {
              const isDone = completed.includes(exercise.id);

              return (
                <div
                  key={exercise.id}
                  className={`group flex flex-col gap-5 rounded-2xl border p-4 transition md:flex-row md:items-center md:p-3 ${
                    isDone
                      ? "border-[#baff00]/30 bg-[#171b18]"
                      : "border-[#292d34] bg-[#191c22] hover:border-[#454950]"
                  }`}
                >
                  {/* Image */}
                  <div className="h-25 w-full shrink-0 overflow-hidden rounded-xl md:h-21 md:w-32">
                    <Image
                      width={300}
                      height={300}
                      src={exercise.image}
                      alt={exercise.name}
                      className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
                        isDone ? "opacity-50" : ""
                      }`}
                    />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-lg font-bold ${
                          isDone ? "text-gray-500 line-through" : "text-white"
                        }`}
                      >
                        {exercise.name}
                      </h3>

                      {exercise.optional && (
                        <span className="text-xs text-gray-500">
                          (optional)
                        </span>
                      )}
                    </div>

                    <p className="mt-0.5 text-sm text-gray-400">
                      {exercise.category ?? exercise.muscleGroups.join(", ")}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs">
                      <span className="flex items-center gap-1 text-gray-300">
                        <span className="text-[#baff00]">◷</span>
                        {exercise.duration} min
                      </span>

                      <span className="flex items-center gap-1 text-gray-300">
                        <span className="text-[#baff00]">♨</span>
                        {exercise.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1 text-gray-300">
                        <span className="text-[#baff00]">☆</span>
                        {exercise.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 md:ml-auto">
                    <Link href={`exercise/${exercise.id}`}>
                      <button
                        // onClick={() => alert(`Details for ${exercise.name}`)}
                        className="rounded-full border border-gray-500 px-4 py-2 text-xs font-medium transition hover:border-white hover:bg-white hover:text-black"
                      >
                        View Details
                      </button>
                    </Link>

                    <button
                      onClick={() => markAsDone(exercise.id)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        isDone
                          ? "bg-[#252a22] text-[#baff00]"
                          : "bg-[#baff00] text-black hover:bg-[#c8ff33]"
                      }`}
                    >
                      {isDone ? "✓ Done" : "✓ Mark as Done"}
                    </button>

                    <button
                      onClick={() => removeExercise(exercise.id)}
                      className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-[#282c32] hover:text-white"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
