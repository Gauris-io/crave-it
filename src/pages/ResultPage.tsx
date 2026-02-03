import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import kairiImage from "@/assets/kairi-chilli.png";

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <motion.button
            onClick={() => navigate("/flavours")}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
            whileHover={{ x: -3 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </motion.button>

          {/* Food Card */}
          <motion.div
            className="card-cozy overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={kairiImage}
                alt="Raw mango with red chilli powder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h1 className="font-display text-3xl md:text-4xl text-primary mb-3">
                Kairi with Spice
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                A classic Indian pregnancy craving — sour, spicy, irresistible.
              </p>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              onClick={() => navigate("/cloud-kitchen")}
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-bold text-lg shadow-warm hover:shadow-glow transition-all duration-300 btn-squishy inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">🛵</span>
              Order from Cloud Kitchen
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultPage;
