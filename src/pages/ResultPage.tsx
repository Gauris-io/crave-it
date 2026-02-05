 import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, Flame, Star } from "lucide-react";
import { useState } from "react";
 import SteamEffect from "@/components/SteamEffect";
 import RecipeModal from "@/components/RecipeModal";
 import { getRecipesByFlavors, Recipe } from "@/data/recipes";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
   const [flippedCard, setFlippedCard] = useState<string | null>(null);

   // Get flavors from navigation state
   const selectedFlavors = (location.state?.flavours as string[]) || [];
   const recipes = getRecipesByFlavors(selectedFlavors);
 
   const handleCardClick = (recipeId: string) => {
     setFlippedCard(flippedCard === recipeId ? null : recipeId);
   };
 
   const handleWantThis = (recipe: Recipe, e: React.MouseEvent) => {
     e.stopPropagation();
     setSelectedRecipe(recipe);
     setIsModalOpen(true);
   };

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
         <div className="max-w-6xl mx-auto">
           {/* Selected Flavors Display */}
           {selectedFlavors.length > 0 && (
             <motion.div
               className="flex flex-wrap gap-2 justify-center mb-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
               <span className="text-muted-foreground font-body text-sm">Showing results for:</span>
               {selectedFlavors.map((flavor) => (
                 <span key={flavor} className="pill-flavor selected text-xs py-1 px-3">
                   {flavor}
                 </span>
               ))}
             </motion.div>
           )}
 
           {/* Recipe Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <AnimatePresence>
               {recipes.map((recipe, index) => {
                 const isFlipped = flippedCard === recipe.id;
                 return (
                   <motion.div
                     key={recipe.id}
                     className="relative cursor-pointer"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     onClick={() => handleCardClick(recipe.id)}
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
                         <div className="flex flex-col gap-4">
                           {/* Image Section */}
                           <div className="relative">
                             <div className="relative rounded-xl overflow-hidden border-2 border-cocoa aspect-[4/3]">
                               <img
                                 src={recipe.image}
                                 alt={recipe.name}
                                 className="w-full h-full object-cover"
                               />
                               <SteamEffect count={3} className="-top-3" />
                             </div>
                             
                             {/* Badges */}
                             <div className="absolute top-3 right-3 flex flex-col gap-2">
                               {recipe.isWhoApproved && (
                                 <span className="badge-who">✓ WHO Approved</span>
                               )}
                             </div>
                           </div>
 
                           {/* Info Section */}
                           <div>
                             <h2 className="font-display text-xl md:text-2xl text-primary mb-1">
                               {recipe.name}
                             </h2>
                             <p className="text-muted-foreground font-body text-sm mb-3">
                               {recipe.subtitle}
                             </p>
 
                             {/* Stats Row */}
                             <div className="flex flex-wrap gap-3 mb-3">
                               <div className="flex items-center gap-1 text-xs font-body">
                                 <Flame className="w-3 h-3 text-chili" />
                                 <span className="text-foreground font-semibold">{recipe.calories}</span>
                                 <span className="text-muted-foreground">cal</span>
                               </div>
                               <div className="flex items-center gap-1 text-xs font-body">
                                 <span className="text-foreground font-semibold">{recipe.protein}</span>
                                 <span className="text-muted-foreground">protein</span>
                               </div>
                               <div className="flex items-center gap-1 text-xs font-body">
                                 <Clock className="w-3 h-3 text-accent" />
                                 <span className="text-foreground font-semibold">{recipe.time}</span>
                               </div>
                             </div>
 
                             {/* Rating */}
                             <div className="flex items-center gap-2 mb-3">
                               <div className="flex items-center gap-0.5">
                                 {[...Array(5)].map((_, i) => (
                                   <Star
                                     key={i}
                                     className={`w-3 h-3 ${
                                       i < Math.floor(recipe.parentScore)
                                         ? "text-accent fill-accent"
                                         : "text-muted"
                                     }`}
                                   />
                                 ))}
                               </div>
                               <span className="text-xs text-muted-foreground">({recipe.parentScore})</span>
                             </div>
 
                             {/* Action Button */}
                             <motion.button
                               onClick={(e) => handleWantThis(recipe, e)}
                               className="btn-retro bg-primary text-primary-foreground px-4 py-2 font-body font-bold text-sm btn-squishy inline-flex items-center gap-2 w-full justify-center"
                               whileHover={{ scale: 1.02 }}
                               whileTap={{ scale: 0.98 }}
                             >
                               <span>🍽️</span>
                               I want this!
                             </motion.button>
 
                             <p className="text-xs text-muted-foreground mt-2 italic text-center">
                               Tap card for details →
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
                             <h3 className="font-display text-lg text-primary mb-3">
                               "{recipe.deliciousness}"
                             </h3>
                             <div className="space-y-2 text-sm font-body">
                               <p>
                                 <span className="font-semibold">Origin:</span>{" "}
                                 <span className="text-muted-foreground">{recipe.origin}</span>
                               </p>
                               <p>
                                 <span className="font-semibold">History:</span>{" "}
                                 <span className="text-muted-foreground text-xs">{recipe.history}</span>
                               </p>
                               <p>
                                 <span className="font-semibold">Nutrition:</span>{" "}
                                 <span className="text-muted-foreground text-xs">{recipe.nutrition}</span>
                               </p>
                             </div>
                           </div>
                           <p className="text-xs text-muted-foreground italic">
                             Tap to flip back →
                           </p>
                         </div>
                       </div>
                     </motion.div>
                   </motion.div>
                 );
               })}
             </AnimatePresence>
           </div>
 
           {recipes.length === 0 && (
             <motion.div
               className="text-center py-12"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
               <p className="text-muted-foreground font-body text-lg">
                 No recipes found for your selection. Try different flavors!
               </p>
             </motion.div>
           )}
         </div>
      </main>

      {/* Recipe Modal */}
       {selectedRecipe && (
         <RecipeModal
           isOpen={isModalOpen}
           onClose={() => {
             setIsModalOpen(false);
             setSelectedRecipe(null);
           }}
           recipe={selectedRecipe}
         />
       )}
    </div>
  );
};

export default ResultPage;