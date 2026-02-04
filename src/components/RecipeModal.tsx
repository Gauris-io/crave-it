import { motion, AnimatePresence } from "framer-motion";
import { X, ChefHat, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Recipe {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: Recipe;
}

const RecipeModal = ({ isOpen, onClose, recipe }: RecipeModalProps) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    onClose();
    navigate("/cloud-kitchen", { state: { recipe } });
  };

  const handleCook = () => {
    onClose();
    navigate("/cook-it", { state: { recipe } });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-cocoa/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card-retro w-full max-w-md relative bg-card"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              {/* Content */}
              <div className="text-center pt-2 pb-4">
                <h2 className="font-display text-2xl text-primary mb-2">
                  Aesthetic dialogue
                </h2>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Lead your gamified with cloud Kitchen with delivery time and price.
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleCook}
                    className="btn-retro w-full bg-primary text-primary-foreground py-4 font-body font-bold text-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChefHat className="w-5 h-5" />
                    Cook It Yourself
                  </motion.button>

                  <motion.button
                    onClick={handleOrder}
                    className="btn-retro w-full bg-card text-foreground py-4 font-body font-bold text-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Truck className="w-5 h-5" />
                    Order Instantly
                  </motion.button>
                </div>
              </div>

              {/* Review Teaser */}
              <div className="mt-4 pt-4 border-t-2 border-cocoa/20">
                <p className="text-center text-xs text-muted-foreground font-body">
                  Don't forget to leave a review after! 💕
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecipeModal;