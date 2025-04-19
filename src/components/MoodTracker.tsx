
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const moods = {
  happy: { emoji: "😊", message: "Your happiness is contagious! Keep spreading that beautiful energy." },
  sad: { emoji: "😔", message: "It's okay to feel sad sometimes. I'm here for you, and this feeling will pass." },
  excited: { emoji: "🤩", message: "Your excitement fills the room with positive energy! What wonderful things await you!" },
  angry: { emoji: "😡", message: "I understand your frustration. Take a deep breath - you're stronger than what's upsetting you." },
  loved: { emoji: "🥰", message: "You ARE deeply loved! And you deserve every bit of that love." },
  anxious: { emoji: "😰", message: "Anxiety is temporary, but your strength is permanent. You're not alone." }
};

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<keyof typeof moods | null>(null);

  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl text-gray-700 mb-4">How are you feeling today?</h3>
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {Object.entries(moods).map(([mood, { emoji }]) => (
          <motion.button
            key={mood}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood as keyof typeof moods)}
            className={`text-3xl p-3 rounded-full transition-all ${
              selectedMood === mood ? "bg-rose-100 shadow-inner scale-110" : "hover:bg-gray-50"
            }`}
          >
            {emoji}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-gray-600 italic text-center"
          >
            {moods[selectedMood].message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
