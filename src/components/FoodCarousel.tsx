import { motion } from "framer-motion";
import foodMango from "@/assets/food-mango.png";
import foodFries from "@/assets/food-fries.png";
import foodToast from "@/assets/food-toast.png";
import foodRamen from "@/assets/food-ramen.png";
import SteamParticles from "./SteamParticles";

const foods = [
  { src: foodRamen, alt: "Steaming ramen bowl" },
  { src: foodToast, alt: "Honey toast with berries" },
  { src: foodFries, alt: "Crispy fries with sauce" },
  { src: foodMango, alt: "Fresh mango with chili" },
];

const FoodCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
        {foods.map((food, index) => (
          <motion.div
            key={index}
            className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-3xl overflow-hidden shadow-warm"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 1.5 + index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src={food.src}
              alt={food.alt}
              className="w-full h-full object-cover"
            />
            <SteamParticles count={3} />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/20 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
