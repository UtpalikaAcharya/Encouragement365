
import { useState } from "react";
import { motion } from "framer-motion";

export const BreathingExercise = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [instruction, setInstruction] = useState("Click to start");

  const startBreathing = () => {
    if (isBreathing) return;
    setIsBreathing(true);
    
    const breathingCycle = async () => {
      setInstruction("Breathe in...");
      await new Promise(resolve => setTimeout(resolve, 4000));
      setInstruction("Hold...");
      await new Promise(resolve => setTimeout(resolve, 4000));
      setInstruction("Breathe out...");
      await new Promise(resolve => setTimeout(resolve, 4000));
    };

    const runCycles = async () => {
      for (let i = 0; i < 3; i++) {
        await breathingCycle();
      }
      setIsBreathing(false);
      setInstruction("Click to start");
    };

    runCycles();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={isBreathing ? {
          scale: [1, 1.5, 1.5, 1],
          transition: { duration: 12, repeat: 2 }
        } : {}}
        onClick={startBreathing}
        className={`w-24 h-24 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 
          flex items-center justify-center text-white font-medium cursor-pointer
          shadow-lg hover:shadow-xl transition-shadow ${isBreathing ? 'pointer-events-none' : ''}`}
      >
        <span className="text-sm">{instruction}</span>
      </motion.div>
      <p className="text-gray-600 text-sm italic">Take a moment to breathe and center yourself</p>
    </div>
  );
};
