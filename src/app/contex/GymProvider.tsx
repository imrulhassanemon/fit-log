'use client'
import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import { Toaster } from "react-hot-toast";
import { Exercise } from "../type/type";

type GymContextType = {
  todaysPlan: Exercise[];
  setTodaysPlan: Dispatch<SetStateAction<Exercise[]>>;
  saved: Exercise[];
  setSaved: Dispatch<SetStateAction<Exercise[]>>;
};

export const GymContext = createContext<GymContextType>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const GymProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<Exercise[]>([]);
  const [saved, setSaved] = useState<Exercise[]>([])

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    saved,
    setSaved
  }

  return (
    <GymContext.Provider value={sharedData}>
      {children}
      <Toaster />
    </GymContext.Provider>
  );
};

export default GymProvider;