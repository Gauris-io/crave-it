import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  quote: string;
  delay?: number;
  onClick?: () => void;
}

const CategoryCard = ({ icon, title, quote, delay = 0, onClick }: CategoryCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="card-cozy w-full text-left group cursor-pointer focus-warm btn-squishy"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2.5 + delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl shrink-0"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
            "{quote}"
          </p>
        </div>
      </div>
      
      <motion.div 
        className="mt-4 flex items-center gap-2 text-primary font-body font-semibold text-sm"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        <span>Explore recipes</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default CategoryCard;
