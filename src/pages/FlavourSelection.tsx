import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const flavours = [
  { id: "spicy", label: "Spicy", emoji: "🌶" },
  { id: "sour", label: "Sour", emoji: "🍋" },
  { id: "tangy", label: "Tangy", emoji: "🍊" },
  { id: "sweet", label: "Sweet", emoji: "🍯" },
  { id: "salty", label: "Salty", emoji: "🧂" },
  { id: "umami", label: "Umami", emoji: "🍄" },
  { id: "bitter", label: "Bitter", emoji: "🥬" },
  { id: "cooling", label: "Cooling", emoji: "🧊" },
];

const FlavourSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFlavour = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((f) => f !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-2">
            What are you craving?
          </h1>
          <p className="text-muted-foreground font-body">
            Select up to 3 flavours
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {flavours.map((flavour, index) => {
              const isSelected = selected.includes(flavour.id);
              return (
                <motion.button
                  key={flavour.id}
                  onClick={() => toggleFlavour(flavour.id)}
                  className={`
                    px-6 py-3 rounded-full font-body font-semibold text-base
                    transition-all duration-200 border-2
                    ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-glow"
                        : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary"
                    }
                  `}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{flavour.emoji}</span>
                  {flavour.label}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground font-body text-sm mb-6">
              {selected.length}/3 selected
            </p>
            <motion.button
              onClick={handleContinue}
              disabled={selected.length === 0}
              className={`
                px-8 py-4 rounded-2xl font-body font-bold text-lg
                transition-all duration-300 btn-squishy
                ${
                  selected.length > 0
                    ? "bg-primary text-primary-foreground shadow-warm hover:shadow-glow"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }
              `}
              whileHover={selected.length > 0 ? { scale: 1.02 } : {}}
              whileTap={selected.length > 0 ? { scale: 0.98 } : {}}
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlavourSelection;
