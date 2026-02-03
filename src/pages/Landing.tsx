import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ghibliFood from "@/assets/ghibli-food-collage.png";

const Landing = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"intro" | "food" | "done">("intro");

  useEffect(() => {
    // Phase 1: Show intro for 2 seconds
    const timer1 = setTimeout(() => {
      setPhase("food");
    }, 2000);

    // Phase 2: Show food for 3 seconds, then navigate
    const timer2 = setTimeout(() => {
      setPhase("done");
    }, 5000);

    const timer3 = setTimeout(() => {
      navigate("/categories");
    }, 5800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 cursor-pointer overflow-hidden relative"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      onClick={() => navigate("/categories")}
    >
      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-body italic text-xl md:text-2xl mb-2"
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Introducing~
            </motion.p>

            <motion.h1
              className="font-display text-6xl md:text-8xl lg:text-9xl"
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crave-it!
            </motion.h1>
          </motion.div>
        )}

        {phase === "food" && (
          <motion.div
            key="food"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main image with Ken Burns effect */}
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.15, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={ghibliFood}
                alt="Delicious Ghibli-style food"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.08, 1.04],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* Overlay gradient for warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/20" />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-secondary/40"
                  style={{
                    left: `${15 + i * 15}%`,
                    bottom: "20%",
                  }}
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Center text overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.p
                  className="font-display text-4xl md:text-6xl text-secondary drop-shadow-lg"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,241,214,0.3)",
                      "0 0 40px rgba(255,241,214,0.6)",
                      "0 0 20px rgba(255,241,214,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Let's eat...
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
