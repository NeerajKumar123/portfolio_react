import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
// import { Tabs, Tab } from "@/components/ui/tabs";


const galleryItems = Array.from({ length: 10 }, (_, index) => ({
    image: `https://picsum.photos/seed/${index}/300/200`,
    title: `Random Title ${index + 1}`,
    category: ["All", "App", "Branding", "Product"][Math.floor(Math.random() * 4)]
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
        <p className="mt-2 text-gray-600 dark:text-gray-400">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container mx-auto mt-8">
        {/* <Tabs className="flex justify-center mb-6">
          {["all", "app", "product", "branding", "books"].map((filter) => (
            <Tab
              key={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Tab>
          ))}
        </Tabs> */}

          {console.log("galleryItems",galleryItems)}
  
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
        >
          {galleryItems.map((item) => (
            <PortfolioItem key={item.id} item={item} className="relative overflow-hidden"/>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
