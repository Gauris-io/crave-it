import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const flavours = [
  { id: "sour", label: "Sour", emoji: "🍋", color: "from-yellow-200 to-yellow-300" },
  { id: "spicy", label: "Spicy", emoji: "🌶️", color: "from-red-200 to-red-300" },
  { id: "tangy", label: "Tangy", emoji: "🍊", color: "from-orange-200 to-orange-300" },
  { id: "sweet", label: "Sweet", emoji: "🍓", color: "from-pink-200 to-pink-300" },
  { id: "salty", label: "Salty", emoji: "🧂", color: "from-gray-200 to-gray-300" },
  { id: "crunchy", label: "Crunchy", emoji: "🥜", color: "from-amber-200 to-amber-300" },
  { id: "umami", label: "Umami", emoji: "🍄", color: "from-stone-200 to-stone-300" },
  { id: "cooling", label: "Cooling", emoji: "🧊", color: "from-cyan-200 to-cyan-300" },
];

const FlavourSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "pregnant";
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
      navigate("/result", { state: { category, flavours: selected } });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 border-b-2 border-cocoa">
        <motion.button
          onClick={() => navigate("/categories")}
          className="w-10 h-10 rounded-full bg-card border-2 border-cocoa flex items-center justify-center"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </motion.button>
        <h1 className="font-display text-2xl md:text-3xl text-primary">
          Select a flavor
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-muted-foreground font-body">
            Pick up to <span className="font-bold text-primary">3</span> flavors you're craving
          </p>
        </motion.div>

        {/* Flavor Pills Grid */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {flavours.map((flavour, index) => {
              const isSelected = selected.includes(flavour.id);
              return (
                <motion.button
                  key={flavour.id}
                  onClick={() => toggleFlavour(flavour.id)}
                  className={`pill-flavor flex items-center gap-2 ${isSelected ? "selected" : ""}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{flavour.emoji}</span>
                  <span>{flavour.label}</span>
                  {isSelected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-primary-foreground ml-1"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Selection indicator */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-muted-foreground font-body text-sm mb-6">
              {selected.length}/3 selected
            </p>

            {/* Continue Button */}
            <motion.button
              onClick={handleContinue}
              disabled={selected.length === 0}
              className={`btn-retro px-10 py-4 font-body font-bold text-lg btn-squishy ${
                selected.length > 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground cursor-not-allowed border-muted-foreground/50"
              }`}
              whileHover={selected.length > 0 ? { scale: 1.02 } : {}}
              whileTap={selected.length > 0 ? { scale: 0.98 } : {}}
              style={
                selected.length === 0
                  ? { boxShadow: "none" }
                  : {}
              }
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default FlavourSelection;