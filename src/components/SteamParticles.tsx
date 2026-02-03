import { motion } from "framer-motion";

interface SteamParticlesProps {
  count?: number;
  className?: string;
}

const SteamParticles = ({ count = 5, className = "" }: SteamParticlesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/10"
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -80, -120],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SteamParticles;
