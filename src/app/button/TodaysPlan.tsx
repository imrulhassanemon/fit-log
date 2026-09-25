"use client";
import { useContext } from "react";
import { GymContext } from "../contex/GymProvider";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { Exercise } from "../type/type";

const TodaysPlan = ({ data }: { data: Exercise }) => {
  const { todaysPlan, setTodaysPlan } = useContext(GymContext);

  const handleAddTodayPlan = () => {
    setTodaysPlan([...todaysPlan, data]);
    toast.success('Successfully created!', {position:"top-right"});
  };

  return (
    <button
      onClick={handleAddTodayPlan}
      className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-lime-300"
    >
      <Plus size={17} />
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlan;