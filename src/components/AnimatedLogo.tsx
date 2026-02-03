import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="text-lg md:text-xl text-accent font-body italic mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Introducing~
      </motion.p>
      <motion.h1
        className="font-display text-6xl md:text-8xl lg:text-9xl text-primary"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        Crave-it!
      </motion.h1>
      <motion.p
        className="mt-4 text-muted-foreground text-lg md:text-xl font-body max-w-md mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Your cravings are valid. Let's nourish you.
      </motion.p>
    </motion.div>
  );
};

export default AnimatedLogo;
