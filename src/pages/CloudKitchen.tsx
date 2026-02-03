import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const kitchens = [
  {
    id: 1,
    name: "Maa's Kitchen",
    price: "₹89",
    deliveryTime: "20-25 min",
  },
  {
    id: 2,
    name: "Craving Corner",
    price: "₹99",
    deliveryTime: "15-20 min",
  },
  {
    id: 3,
    name: "Desi Delights",
    price: "₹79",
    deliveryTime: "25-30 min",
  },
  {
    id: 4,
    name: "Home Bites",
    price: "₹95",
    deliveryTime: "30-35 min",
  },
];

const CloudKitchen = () => {
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
            onClick={() => navigate("/result")}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
            whileHover={{ x: -3 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </motion.button>

          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-3xl md:text-4xl text-primary mb-2">
              Cloud Kitchens
            </h1>
            <p className="text-muted-foreground font-body">
              Kairi with Spice — freshly prepared
            </p>
          </motion.div>

          {/* Kitchen List */}
          <div className="space-y-4">
            {kitchens.map((kitchen, index) => (
              <motion.div
                key={kitchen.id}
                className="card-cozy flex items-center justify-between cursor-pointer hover:shadow-glow transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div>
                  <h3 className="font-body font-bold text-lg text-foreground">
                    {kitchen.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {kitchen.deliveryTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body font-bold text-xl text-primary">
                    {kitchen.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudKitchen;
