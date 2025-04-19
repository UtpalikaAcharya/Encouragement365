
import { EncouragementCard } from "@/components/EncouragementCard";
import { MoodTracker } from "@/components/MoodTracker";
import { BreathingExercise } from "@/components/BreathingExercise";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-3xl opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            <Heart className="text-rose-300" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <EncouragementCard />
          <div className="grid md:grid-cols-2 gap-6">
            <MoodTracker />
            <BreathingExercise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
