import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import SteamEffect from "@/components/SteamEffect";
import foodCurry from "@/assets/food-curry.png";
import foodMochi from "@/assets/food-mochi.png";
import foodBaby from "@/assets/food-babyfood.png";
import foodSalad from "@/assets/food-salad.png";

const categories = [
  {
    id: "pregnant",
    title: "Pregnancy Cravings",
    quote: "Your cravings are valid. Let's nourish both of you.",
    image: foodCurry,
    hasSteam: true,
  },
  {
    id: "period",
    title: "Period Comfort",
    quote: "Comfort food, because your body deserves kindness.",
    image: foodMochi,
    hasSteam: false,
  },
  {
    id: "babies",
    title: "Baby's First Bites",
    quote: "Healthy food babies actually accept.",
    image: foodBaby,
    hasSteam: false,
  },
  {
    id: "health",
    title: "Mindful Eating",
    quote: "Food that loves you back.",
    image: foodSalad,
    hasSteam: false,
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (id: string) => {
    if (id === "babies") {
      navigate("/baby-form");
    } else {
      navigate("/flavours", { state: { category: id } });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b-2 border-cocoa">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-primary cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Crave-it!
        </motion.h1>
        <motion.button
          className="w-10 h-10 rounded-full bg-card border-2 border-cocoa flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className="w-5 h-5 text-foreground" />
        </motion.button>
      </header>

      {/* Main Grid */}
      <main className="container mx-auto px-4 py-8">
        <motion.p
          className="text-center text-muted-foreground font-body text-lg mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What are you craving today?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="card-retro group text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Food Image */}
              <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border-2 border-cocoa">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {category.hasSteam && <SteamEffect count={3} className="-top-2" />}
              </div>

              {/* Text Content */}
              <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">
                "{category.quote}"
              </p>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;