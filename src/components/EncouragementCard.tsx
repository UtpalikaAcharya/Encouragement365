
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalMessages, kdramaInspirationalQuotes } from "@/data/messages";
import { Heart } from "lucide-react";

export const EncouragementCard = () => {
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState({ text: "", author: "" });

  const generateMessage = () => {
    const newMessage = personalMessages[Math.floor(Math.random() * personalMessages.length)];
    const newQuote = kdramaInspirationalQuotes[Math.floor(Math.random() * kdramaInspirationalQuotes.length)];
    
    setMessage(newMessage);
    setQuote(newQuote);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
      <h1 className="font-dancing text-5xl text-rose-400 mb-6">Hey Pinky, Just for You 💖</h1>
      <p className="text-xl text-gray-600 mb-8">Your K-drama heroine believes in you! Let's boost that spirit. 🌟</p>
      
      <Button onClick={generateMessage} className="mb-6">
        <Heart className="mr-2" /> Generate Encouragement
      </Button>
      
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <motion.p className="text-2xl font-dancing text-rose-500 italic p-6 bg-white/50 rounded-xl shadow-inner">
              {message}
            </motion.p>
            
            {quote.text && (
              <motion.blockquote 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-gray-700 italic border-l-4 border-rose-300 pl-4"
              >
                "{quote.text}"
                <footer className="text-sm text-rose-500 mt-2">- {quote.author}</footer>
              </motion.blockquote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
