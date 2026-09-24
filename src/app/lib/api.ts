
import { Exercise } from "@/app/type/type";

export const allData = async (): Promise<Exercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: Exercise[] = await res.json();
  return data;
};