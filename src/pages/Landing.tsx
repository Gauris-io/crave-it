import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to categories after 2.5 seconds
    const timer = setTimeout(() => {
      navigate("/categories");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.h1
        className="font-display text-6xl md:text-8xl lg:text-9xl text-primary cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onClick={() => navigate("/categories")}
      >
        Crave-it!
      </motion.h1>
    </div>
  );
};

export default Landing;
