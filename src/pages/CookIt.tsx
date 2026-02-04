import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import ReviewSlider from "@/components/ReviewSlider";
import kairiImage from "@/assets/kairi-chilli.png";

const ingredients = [
  { name: "Raw mango (Kairi)", amount: "2 medium" },
  { name: "Red chili powder", amount: "1 tsp" },
  { name: "Salt", amount: "½ tsp" },
  { name: "Black salt (optional)", amount: "¼ tsp" },
];

const steps = [
  "Wash the raw mangoes thoroughly under running water.",
  "Peel the skin if desired, or leave it on for extra texture.",
  "Cut the mango into thin slices or wedges, removing the seed.",
  "Arrange the slices on a plate.",
  "Sprinkle red chili powder evenly over the slices.",
  "Add salt and black salt to taste.",
  "Toss gently to coat all pieces.",
  "Serve immediately and enjoy the tangy-spicy goodness!",
];

const CookIt = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showReview, setShowReview] = useState(false);

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((s) => s !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
      if (completedSteps.length + 1 === steps.length) {
        setTimeout(() => setShowReview(true), 500);
      }
    }
  };

  const allDone = completedSteps.length === steps.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 border-b-2 border-cocoa">
        <motion.button
          onClick={() => navigate("/result")}
          className="w-10 h-10 rounded-full bg-card border-2 border-cocoa flex items-center justify-center"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </motion.button>
        <h1 className="font-display text-2xl md:text-3xl text-primary">
          Cook It Yourself
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Recipe Header */}
          <motion.div
            className="card-retro mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-cocoa shrink-0">
                <img
                  src={kairiImage}
                  alt="Kairi with Spice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-xl text-primary">Kairi with Spice</h2>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  A classic Indian pregnancy craving — sour, spicy, irresistible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            className="card-retro mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-lg text-primary mb-3">Ingredients</h3>
            <ul className="space-y-2">
              {ingredients.map((item, index) => (
                <li key={index} className="flex justify-between font-body text-sm">
                  <span className="text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">{item.amount}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="card-retro mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-lg text-primary mb-4">Steps</h3>
            <ul className="space-y-3">
              {steps.map((step, index) => {
                const isComplete = completedSteps.includes(index);
                return (
                  <motion.li
                    key={index}
                    className={`flex gap-3 cursor-pointer p-2 rounded-lg transition-colors ${
                      isComplete ? "bg-accent/10" : "hover:bg-muted"
                    }`}
                    onClick={() => toggleStep(index)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isComplete
                          ? "bg-accent border-accent text-accent-foreground"
                          : "border-cocoa bg-card"
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-bold">{index + 1}</span>
                      )}
                    </div>
                    <p
                      className={`font-body text-sm ${
                        isComplete ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {step}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Progress */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-body text-sm text-muted-foreground">
              {completedSteps.length}/{steps.length} steps completed
            </p>
            <div className="mt-2 h-2 bg-muted rounded-full border border-cocoa/30 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                animate={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Completion Message */}
          {allDone && !showReview && (
            <motion.div
              className="text-center py-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="font-display text-xl text-primary">🎉 You did it!</p>
              <p className="text-muted-foreground font-body text-sm">
                Enjoy your delicious creation!
              </p>
            </motion.div>
          )}

          {/* Review Section */}
          {showReview && <ReviewSlider />}
        </div>
      </main>
    </div>
  );
};

export default CookIt;