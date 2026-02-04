import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ghibliFood from "@/assets/ghibli-food-collage.png";
import foodMochi from "@/assets/food-mochi.png";
import foodCurry from "@/assets/food-curry.png";
import foodSalad from "@/assets/food-salad.png";
import foodBaby from "@/assets/food-babyfood.png";

const foods = [foodMochi, foodCurry, foodSalad, foodBaby];

const Landing = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"logo" | "foods" | "ghibli" | "done">("logo");

  useEffect(() => {
    // Phase 1: Show logo for 1.5 seconds
    const timer1 = setTimeout(() => setPhase("foods"), 1500);
    // Phase 2: Show foods for 2 seconds
    const timer2 = setTimeout(() => setPhase("ghibli"), 3500);
    // Phase 3: Show ghibli collage for 2.5 seconds
    const timer3 = setTimeout(() => setPhase("done"), 6000);
    // Navigate to categories
    const timer4 = setTimeout(() => navigate("/categories"), 6800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center cursor-pointer overflow-hidden relative bg-background"
      onClick={() => navigate("/categories")}
    >
      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            key="logo"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {/* Steam lines above logo */}
            <motion.div
              className="flex justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-8 bg-primary/30 rounded-full"
                  animate={{
                    y: [-5, -20],
                    opacity: [0, 0.6, 0],
                    scaleY: [1, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            <motion.h1
              className="font-display text-6xl md:text-8xl lg:text-9xl text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Crave-it!
            </motion.h1>
          </motion.div>
        )}

        {phase === "foods" && (
          <motion.div
            key="foods"
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="font-display text-4xl md:text-5xl text-primary mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Crave-it!
            </motion.h2>

            {/* Food images sliding in */}
            <div className="flex gap-4 md:gap-6">
              {foods.map((food, index) => (
                <motion.div
                  key={index}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-cocoa shadow-retro bg-card"
                  initial={{ opacity: 0, x: 100, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <img
                    src={food}
                    alt="Delicious food"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Menu button mockup */}
            <motion.div
              className="mt-8 btn-retro bg-primary text-primary-foreground px-8 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              MENU
            </motion.div>
          </motion.div>
        )}

        {phase === "ghibli" && (
          <motion.div
            key="ghibli"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Main image with Ken Burns effect */}
            <motion.img
              src={ghibliFood}
              alt="Delicious Ghibli-style food"
              className="w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Center text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="font-display text-4xl md:text-6xl text-card drop-shadow-lg">
                Let's eat...
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;