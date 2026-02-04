import { motion } from "framer-motion";
import { useState } from "react";
import { Frown, Heart } from "lucide-react";

const ReviewSlider = () => {
  const [value, setValue] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isLoved = value > 70;

  return (
    <motion.div
      className="card-retro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="font-display text-xl text-primary text-center mb-4">
        Review
      </h3>

      {!submitted ? (
        <>
          {/* Slider */}
          <div className="relative px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Frown className="w-5 h-5" />
                <span className="text-sm font-body">Worst</span>
              </div>
              <div className="flex items-center gap-2 text-primary relative">
                <span className="text-sm font-body">Loved it!</span>
                <Heart className={`w-5 h-5 ${isLoved ? "fill-chili text-chili" : ""}`} />
                
                {/* Steam effect on loved side */}
                {isLoved && (
                  <div className="absolute -top-6 right-0">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-4 bg-primary/30 rounded-full"
                        style={{ left: `${i * 8}px` }}
                        animate={{
                          y: [-5, -25],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Custom Slider Track */}
            <div className="relative h-4 rounded-full bg-muted border-2 border-cocoa overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-muted-foreground to-primary rounded-full"
                style={{ width: `${value}%` }}
                animate={{ width: `${value}%` }}
              />
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />

            {/* Slider Thumb */}
            <motion.div
              className="absolute top-1/2 w-6 h-6 bg-card border-2 border-cocoa rounded-full shadow-md -translate-y-1/2 pointer-events-none"
              style={{ left: `calc(${value}% - 12px)`, top: "calc(50% + 12px)" }}
              animate={{ left: `calc(${value}% - 12px)` }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
            {["Too bitter", "Texture loose", "Baby enjoyed sweetness"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-muted border border-cocoa/30 text-xs font-body text-muted-foreground cursor-pointer hover:bg-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            className="btn-retro w-full bg-primary text-primary-foreground py-3 font-body font-bold"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Submit Review
          </motion.button>
        </>
      ) : (
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-3"
          >
            💕
          </motion.div>
          <p className="font-display text-xl text-primary">Thank you!</p>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Your review helps other cravings find their way.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ReviewSlider;