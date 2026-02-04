import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import ReviewSlider from "@/components/ReviewSlider";

const kitchens = [
  {
    id: 1,
    name: "Maa's Kitchen",
    price: "₹89",
    deliveryTime: "20-25 min",
    distance: "1.2 km",
  },
  {
    id: 2,
    name: "Craving Corner",
    price: "₹99",
    deliveryTime: "15-20 min",
    distance: "0.8 km",
  },
  {
    id: 3,
    name: "Desi Delights",
    price: "₹79",
    deliveryTime: "25-30 min",
    distance: "2.1 km",
  },
  {
    id: 4,
    name: "Home Bites",
    price: "₹95",
    deliveryTime: "30-35 min",
    distance: "3.5 km",
  },
];

const CloudKitchen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = location.state?.recipe;
  const [ordered, setOrdered] = useState<number | null>(null);
  const [showReview, setShowReview] = useState(false);

  const handleOrder = (kitchenId: number) => {
    setOrdered(kitchenId);
    setTimeout(() => setShowReview(true), 1500);
  };

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
          Cloud Kitchens
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Recipe Info */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-muted-foreground font-body">
              Ordering: <span className="font-semibold text-foreground">Kairi with Spice</span>
            </p>
          </motion.div>

          {/* Kitchen List */}
          <div className="space-y-4">
            {kitchens.map((kitchen, index) => (
              <motion.div
                key={kitchen.id}
                className={`card-retro flex items-center justify-between ${
                  ordered === kitchen.id ? "ring-2 ring-accent" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex-1">
                  <h3 className="font-body font-bold text-lg text-foreground">
                    {kitchen.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {kitchen.deliveryTime}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      {kitchen.distance}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-body font-bold text-xl text-primary">
                    {kitchen.price}
                  </p>
                  <motion.button
                    onClick={() => handleOrder(kitchen.id)}
                    disabled={ordered !== null}
                    className={`btn-retro px-4 py-2 font-body font-semibold text-sm ${
                      ordered === kitchen.id
                        ? "bg-accent text-accent-foreground"
                        : ordered !== null
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-primary text-primary-foreground"
                    }`}
                    whileHover={ordered === null ? { scale: 1.02 } : {}}
                    whileTap={ordered === null ? { scale: 0.98 } : {}}
                    style={ordered !== null && ordered !== kitchen.id ? { boxShadow: "none" } : {}}
                  >
                    {ordered === kitchen.id ? "Ordered ✓" : "Order"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Section */}
          {showReview && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ReviewSlider />
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CloudKitchen;