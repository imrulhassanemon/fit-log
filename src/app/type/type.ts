export interface Exercise {
  id: number;
  name: string;
  image: string;

  muscleGroups: string[];

  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";

  duration: number;          // minutes
  caloriesBurned: number;    // kcal
  calories: number;          // kcal (alias used in plan view)

  sets: number;
  reps: string;

  rating: number;
  description: string;

  instructions: string[];

  category?: string;
  optional?: boolean;
}