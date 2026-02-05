 import kairiImage from "@/assets/kairi-chilli.png";
 import tacosImage from "@/assets/food-tacos-salsa.png";
 import tomYumImage from "@/assets/food-tom-yum.png";
 import caramelPopcornImage from "@/assets/food-caramel-popcorn.png";
 import mochiIceImage from "@/assets/food-mochi-ice.png";
 import koreanChickenImage from "@/assets/food-korean-chicken.png";
 import lemonadeImage from "@/assets/food-lemonade.png";
 
 export interface Recipe {
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
   flavors: string[];
 }
 
 export const allRecipes: Recipe[] = [
   {
     id: "kairi",
     name: "Kairi with Spice",
     subtitle: "Raw Mango with Chili Powder",
     image: kairiImage,
     calories: "205",
     protein: "2g",
     time: "5 min",
     origin: "India",
     history: "A staple Indian summer flavor. Raw mangoes are a cultural institution — enjoyed by pregnant women for generations to curb nausea and satisfy sour cravings.",
     deliciousness: "The country of origin is every veranda on a hot Indian summer. Memory stitched in tartness, time-tested and loved.",
     parentScore: 4.5,
     nutrition: "Rich in Vitamin C, aids digestion",
     isWhoApproved: true,
     texture: "Crunchy",
     flavors: ["sour", "spicy", "tangy"],
   },
   {
     id: "tacos-salsa",
     name: "Mexican Tacos",
     subtitle: "Street Tacos with Fresh Salsa",
     image: tacosImage,
     calories: "320",
     protein: "18g",
     time: "25 min",
     origin: "Mexico",
     history: "Born on the streets of Mexico City, these tacos carry centuries of culinary tradition. The fresh salsa adds the perfect tangy kick.",
     deliciousness: "A fiesta in every bite. The crunch of fresh vegetables meets the warmth of seasoned meat, all wrapped in a soft corn embrace.",
     parentScore: 4.8,
     nutrition: "High protein, rich in fiber and vitamins",
     isWhoApproved: true,
     texture: "Crunchy",
     flavors: ["sour", "spicy"],
   },
   {
     id: "tom-yum",
     name: "Tom Yum Soup",
     subtitle: "Thai Hot & Sour Shrimp Soup",
     image: tomYumImage,
     calories: "180",
     protein: "15g",
     time: "30 min",
     origin: "Thailand",
     history: "Thailand's most famous soup, a perfect balance of hot, sour, salty, and sweet. Lemongrass and galangal create an aromatic wonder.",
     deliciousness: "Steam rises like whispers of Bangkok street markets. Each spoonful is a warm hug with a spicy kick.",
     parentScore: 4.6,
     nutrition: "Low calorie, high in antioxidants",
     isWhoApproved: true,
     texture: "Soupy",
     flavors: ["sour", "spicy", "umami"],
   },
   {
     id: "caramel-popcorn",
     name: "Caramel Popcorn",
     subtitle: "Sweet & Salty Movie Night Treat",
     image: caramelPopcornImage,
     calories: "280",
     protein: "3g",
     time: "15 min",
     origin: "USA",
     history: "A carnival classic since the 1890s. The perfect marriage of buttery sweetness and satisfying crunch.",
     deliciousness: "Golden nuggets of joy, each kernel wrapped in amber sweetness. The perfect balance of sweet meets salty.",
     parentScore: 4.9,
     nutrition: "Whole grain, good source of fiber",
     texture: "Crunchy",
     flavors: ["sweet", "salty", "crunchy"],
   },
   {
     id: "mochi-ice",
     name: "Mochi Ice Cream",
     subtitle: "Japanese Sweet Rice Cake",
     image: mochiIceImage,
     calories: "120",
     protein: "2g",
     time: "No prep",
     origin: "Japan",
     history: "A modern fusion of traditional Japanese mochi with ice cream, creating a delightful chewy-cold contrast.",
     deliciousness: "Soft, chewy, and cold — a textural symphony. Each bite is a little cloud of frozen happiness.",
     parentScore: 4.7,
     nutrition: "Contains calcium, moderate sugar",
     texture: "Chewy",
     flavors: ["sweet", "cooling"],
   },
   {
     id: "korean-chicken",
     name: "Korean Fried Chicken",
     subtitle: "Honey Glazed Crispy Chicken",
     image: koreanChickenImage,
     calories: "450",
     protein: "28g",
     time: "40 min",
     origin: "South Korea",
     history: "A K-drama staple! Double-fried for extra crunch, glazed with a sweet-spicy sauce that's utterly addictive.",
     deliciousness: "Shatteringly crispy outside, juicy inside. The honey glaze creates a perfect sweet-savory harmony.",
     parentScore: 4.9,
     nutrition: "High protein, moderate fat",
     texture: "Crunchy",
     flavors: ["sweet", "spicy", "crunchy", "umami"],
   },
   {
     id: "lemonade",
     name: "Cucumber Mint Lemonade",
     subtitle: "Refreshing Summer Cooler",
     image: lemonadeImage,
     calories: "85",
     protein: "0g",
     time: "10 min",
     origin: "Mediterranean",
     history: "A Mediterranean-inspired refresher that combines the tartness of lemon with cooling cucumber and fresh mint.",
     deliciousness: "Like diving into a cool spring on a hot day. Every sip refreshes and revitalizes.",
     parentScore: 4.4,
     nutrition: "Hydrating, vitamin C rich, low calorie",
     texture: "Liquid",
     flavors: ["sour", "cooling", "sweet"],
   },
 ];
 
 export function getRecipesByFlavors(selectedFlavors: string[]): Recipe[] {
   if (selectedFlavors.length === 0) return allRecipes;
   
   // Score recipes by how many selected flavors they match
   const scored = allRecipes.map(recipe => {
     const matchCount = selectedFlavors.filter(f => recipe.flavors.includes(f)).length;
     return { recipe, matchCount };
   });
   
   // Filter recipes that match at least one flavor and sort by match count
   return scored
     .filter(s => s.matchCount > 0)
     .sort((a, b) => b.matchCount - a.matchCount)
     .map(s => s.recipe);
 }