import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
// import { Tabs, Tab } from "@/components/ui/tabs";

const Categories = ["All", "App", "Branding", "Product"]

const galleryItems = Array.from({ length: 5 }, (_, index) => ({
  image: `https://picsum.photos/seed/${index}/300/200`,
  title: `Random Title ${index + 1}`,
  desc: `Random Desc ${index + 1}`,
  category: Categories[Math.floor(Math.random() * 4)]
}));

const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio</h2>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex justify-center mb-6">
          {Categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 mx-2 text-lg font-semibold border-b-2 transition-all duration-300 ${activeFilter === filter ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-600 hover:text-indigo-500"
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} className="relative overflow-hidden" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
