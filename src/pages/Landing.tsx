import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to categories after 3 seconds
    const timer = setTimeout(() => {
      navigate("/categories");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 cursor-pointer"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      onClick={() => navigate("/categories")}
    >
      <motion.p
        className="font-body italic text-xl md:text-2xl mb-2"
        style={{ color: "hsl(var(--secondary))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Introducing~
      </motion.p>
      
      <motion.h1
        className="font-display text-6xl md:text-8xl lg:text-9xl"
        style={{ color: "hsl(var(--secondary))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Crave-it!
      </motion.h1>
    </div>
  );
};

export default Landing;
