import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    icon: "🤍",
    title: "Pregnant",
    quote: "Your cravings are valid. Let's nourish both of you.",
  },
  {
    icon: "🌸",
    title: "Period Care",
    quote: "Comfort food, because your body deserves kindness.",
  },
  {
    icon: "🍼",
    title: "Babies",
    quote: "Healthy food babies actually accept.",
  },
  {
    icon: "🥗",
    title: "Health-Conscious",
    quote: "Food that loves you back.",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (title: string) => {
    if (title === "Pregnant") {
      navigate("/flavours");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-2">
            Crave-it!
          </h1>
          <p className="text-muted-foreground font-body text-lg">
            What are you craving today?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => handleCategoryClick(category.title)}
              className="card-cozy w-full text-left group cursor-pointer focus-warm btn-squishy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
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
                  {category.icon}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                    "{category.quote}"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
