import { motion } from "framer-motion";

interface SteamEffectProps {
  count?: number;
  className?: string;
}

const SteamEffect = ({ count = 3, className = "" }: SteamEffectProps) => {
  return (
    <div className={`absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-6 rounded-full bg-foreground/10"
          style={{
            left: `${(i - 1) * 12}px`,
          }}
          animate={{
            y: [-5, -35],
            opacity: [0, 0.6, 0],
            scaleX: [1, 1.3, 0.8],
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SteamEffect;