
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95",
        variant === "primary" 
          ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg hover:shadow-xl" 
          : "bg-white/80 text-rose-500 border-2 border-rose-200 hover:border-rose-300",
        className
      )}
      {...props}
    />
  );
};
