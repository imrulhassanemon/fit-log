'use client'
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { GymContext } from "../contex/GymProvider";
import { Exercise } from "../type/type";
import toast from "react-hot-toast";

const SavedButton = ({data}:{data: Exercise}) => {
  const { saved, setSaved } = useContext(GymContext)

  const handleSavedButton = () => {

    const alreadyAddedSaved = saved.some((save) => save.id === data.id)

    if(alreadyAddedSaved){
        return toast.error("you already Added", {position:"top-right"})
    }
    else{

        setSaved([...saved, data])
        toast.success('Saved for leter', {position:"top-right"})
    }

    
  }

  return (
    <button onClick={handleSavedButton} className="flex items-center gap-2 rounded-full border border-gray-500 px-5 py-2.5 text-sm transition hover:bg-white hover:text-black">
      <Bookmark size={17} />
      Save for later
    </button>
  );
};

export default SavedButton;
