import { Clock3, Flame, Star, Dumbbell, Layers, Repeat } from "lucide-react";
import { Exercise } from "../type/type";
import Link from "next/link";
import Image from "next/image";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link href={`/exercise/${exercise.id}`}>
      <div className="group cursor-pointer w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1220] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0B1220] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-4 p-5">
          {/* Muscle Tags */}
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              {exercise.name}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
              <Dumbbell size={16} />
              <span>{exercise.equipment}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-400">
            {exercise.description}
          </p>

          {/* Divider */}
          <div className="border-t border-slate-800" />

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-slate-300">
            <div className="flex items-center gap-1">
              <Clock3 size={16} className="text-slate-500" />
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <Flame size={16} className="text-orange-400" />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span>{exercise.rating}</span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between rounded-2xl bg-slate-900/70 p-3">
            <div className="flex items-center gap-2">
              <Layers className="text-lime-400" size={18} />
              <div>
                <p className="text-xs text-slate-500">Sets</p>
                <p className="font-semibold text-white">{exercise.sets}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Repeat className="text-sky-400" size={18} />
              <div>
                <p className="text-xs text-slate-500">Reps</p>
                <p className="font-semibold text-white">{exercise.reps}</p>
              </div>
            </div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
              {exercise.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
