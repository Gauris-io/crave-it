import { motion } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";
import FoodCarousel from "@/components/FoodCarousel";
import CategoryCard from "@/components/CategoryCard";
import SteamParticles from "@/components/SteamParticles";

const categories = [
  {
    icon: "🤍",
    title: "Pregnant Women",
    quote: "Your cravings are valid. Let's nourish both of you.",
  },
  {
    icon: "🌸",
    title: "Period Care",
    quote: "Comfort food, because your body deserves kindness.",
  },
  {
    icon: "🍼",
    title: "Babies",
    quote: "Healthy food babies actually accept.",
  },
  {
    icon: "🥗",
    title: "Health-Conscious",
    quote: "Food that loves you back.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      
      {/* Decorative gradient orbs */}
      <motion.div 
        className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="fixed bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.3, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="relative">
            <SteamParticles count={8} className="opacity-30" />
            <AnimatedLogo />
          </div>
          
          {/* Food Carousel */}
          <motion.div 
            className="mt-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <FoodCarousel />
          </motion.div>
        </section>

        {/* Category Cards Section */}
        <section className="py-12 md:py-20">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              What are you craving?
            </h2>
            <p className="mt-2 text-muted-foreground font-body">
              Choose your comfort zone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                quote={category.quote}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <motion.footer 
          className="text-center py-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
        >
          <p className="font-display text-2xl text-primary mb-2">Crave-it!</p>
          <p className="text-muted-foreground text-sm font-body">
            Made with 💛 for comfort seekers
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2 font-body">
            Team: commit & cook — Gauri Singh Sengar, Avanie Sharma, Angel Gautam
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
