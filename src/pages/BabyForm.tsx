import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const textureOptions = ["Puree", "Mash", "Finger Food"];
const allergyOptions = ["Dairy", "Eggs", "Nuts", "Gluten", "Soy", "Fish"];

const BabyForm = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [texture, setTexture] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);

  const toggleAllergy = (allergy: string) => {
    if (allergies.includes(allergy)) {
      setAllergies(allergies.filter((a) => a !== allergy));
    } else {
      setAllergies([...allergies, allergy]);
    }
  };

  const handleSubmit = () => {
    if (age && texture) {
      navigate("/result", { state: { category: "babies", babyAge: age, texture, allergies } });
    }
  };

  const isValid = age && texture;

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
          Baby's Profile
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Age Input */}
          <motion.div
            className="card-retro mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="font-display text-lg text-primary block mb-3">
              Baby's Age (months)
            </label>
            <input
              type="number"
              min="4"
              max="36"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 8"
              className="w-full px-4 py-3 rounded-xl bg-card border-2 border-cocoa font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          {/* Texture Selection */}
          <motion.div
            className="card-retro mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="font-display text-lg text-primary block mb-3">
              Texture Stage
            </label>
            <div className="flex flex-wrap gap-2">
              {textureOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setTexture(option)}
                  className={`pill-flavor ${texture === option ? "selected" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Allergies */}
          <motion.div
            className="card-retro mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="font-display text-lg text-primary block mb-3">
              Allergies (optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {allergyOptions.map((allergy) => (
                <button
                  key={allergy}
                  onClick={() => toggleAllergy(allergy)}
                  className={`pill-flavor text-sm ${
                    allergies.includes(allergy) ? "selected" : ""
                  }`}
                >
                  {allergy}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`btn-retro w-full py-4 font-body font-bold text-lg ${
              isValid
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            style={!isValid ? { boxShadow: "none" } : {}}
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Find Recipes
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default BabyForm;