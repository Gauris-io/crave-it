import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, Flame, Star } from "lucide-react";
import { useState } from "react";
import kairiImage from "@/assets/kairi-chilli.png";
import SteamEffect from "@/components/SteamEffect";
import RecipeModal from "@/components/RecipeModal";

interface Recipe {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  calories: string;
  protein: string;
  time: string;
  origin: string;
  history: string;
  deliciousness: string;
  parentScore: number;
  nutrition: string;
  isWhoApproved?: boolean;
  texture?: string;
}

const kairiRecipe: Recipe = {
  id: "kairi",
  name: "Kairi with Spice",
  subtitle: "Raw Mango with Chili Powder",
  image: kairiImage,
  calories: "205",
  protein: "2g",
  time: "5 min",
  origin: "India",
  history: "A staple Indian summer flavor. Raw mangoes are a cultural institution — enjoyed by pregnant women for generations to curb nausea and satisfy sour cravings.",
  deliciousness: "The country of origin is every veranda on a hot Indian summer. Memory stitched in tartness, time-tested and loved. In the festival of senses, this snack is bold, delicious and deliciousness.",
  parentScore: 4.5,
  nutrition: "Rich in Vitamin C, aids digestion",
  isWhoApproved: true,
  texture: "Crunchy",
};

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const recipe = kairiRecipe;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 border-b-2 border-cocoa">
        <motion.button
          onClick={() => navigate("/flavours")}
          className="w-10 h-10 rounded-full bg-card border-2 border-cocoa flex items-center justify-center"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </motion.button>
        <h1 className="font-display text-2xl md:text-3xl text-primary">
          Recipe results
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Card - Flippable */}
          <motion.div
            className="relative cursor-pointer perspective-1000"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of Card */}
              <div
                className={`card-retro ${isFlipped ? "invisible" : ""}`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Section */}
                  <div className="relative w-full md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden border-2 border-cocoa aspect-[4/3]">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                      />
                      <SteamEffect count={4} className="-top-3" />
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {recipe.isWhoApproved && (
                        <span className="badge-who">✓ WHO Approved</span>
                      )}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-primary mb-1">
                        {recipe.name}
                      </h2>
                      <p className="text-muted-foreground font-body mb-4">
                        {recipe.subtitle}
                      </p>

                      {/* Stats Row */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm font-body">
                          <Flame className="w-4 h-4 text-chili" />
                          <span className="text-foreground font-semibold">{recipe.calories}</span>
                          <span className="text-muted-foreground">Calories</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-body">
                          <span className="text-foreground font-semibold">{recipe.protein}</span>
                          <span className="text-muted-foreground">Protein</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-body">
                          <Clock className="w-4 h-4 text-accent" />
                          <span className="text-foreground font-semibold">{recipe.time}</span>
                        </div>
                      </div>

                      {/* Nutrition & Rating */}
                      <div className="space-y-2">
                        <p className="text-sm font-body">
                          <span className="font-semibold">Nutrition: </span>
                          <span className="text-muted-foreground">{recipe.nutrition}</span>
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Parent Acceptance:</span>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(recipe.parentScore)
                                    ? "text-accent fill-accent"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-4 italic">
                      Click card to see more details →
                    </p>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div
                className={`card-retro absolute top-0 left-0 w-full h-full ${!isFlipped ? "invisible" : ""}`}
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="h-full flex flex-col justify-between p-2">
                  <div>
                    <h3 className="font-display text-xl text-primary mb-3">
                      "{recipe.deliciousness}"
                    </h3>
                    <div className="space-y-3 text-sm font-body">
                      <p>
                        <span className="font-semibold">Origin:</span>{" "}
                        <span className="text-muted-foreground">{recipe.origin}</span>
                      </p>
                      <p>
                        <span className="font-semibold">History:</span>{" "}
                        <span className="text-muted-foreground">{recipe.history}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    Click to flip back →
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="btn-retro bg-primary text-primary-foreground px-8 py-4 font-body font-bold text-lg btn-squishy inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">🍽️</span>
              I want this!
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* Recipe Modal */}
      <RecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipe={recipe}
      />
    </div>
  );
};

export default ResultPage;