import React from 'react';
import { BiZoomIn, BiLink } from "react-icons/bi";

const PortfolioItem = ({ item }) => {
  return (
    <div className="relative group overflow-hidden w-full h-80 flex items-center justify-center">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform transform group-hover:scale-110"
        style={{ backgroundImage: `url(${item?.image})` }}
      ></div>
      
      {/* Grayed Overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity"></div>
      
      {/* Title on Top Right */}
      <h4 className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
        {item?.title}
      </h4>
      
      {/* Centered Icon Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex space-x-4 bg-black bg-opacity-50 p-2 rounded-lg">
          <a href={item?.image} title="Zoom In" className="text-white hover:text-yellow-400">
            <BiZoomIn size={24} />
          </a>
          <a href="portfolio-details.html" title="More Details" className="text-white hover:text-yellow-400">
            <BiLink size={24} />
          </a>
        </div>
      </div>
      
      {/* Description at Bottom */}
      <p className="absolute bottom-4 left-0 right-0 text-center text-white p-2 text-sm">
        {item?.desc}
      </p>
    </div>
  );
}

export default PortfolioItem;
