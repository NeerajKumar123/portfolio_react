import React from 'react';

const PortfolioItem = () => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books relative group overflow-hidden">
      <div className="portfolio-content h-100 relative">
        {/* Image with zoom effect */}
        <img 
          src="/books-2.jpg" 
          className="img-fluid transition-transform transform group-hover:scale-110" 
          alt="Books 2" 
        />
        
        {/* Grayed overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity"></div>

        {/* Portfolio info (text) */}
        <div className="portfolio-info absolute bottom-0 left-0 right-0 p-4 text-white transition-all group-hover:text-yellow-400 group-hover:font-bold">
          <h4>Books 2</h4>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          
          <a href="/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link text-white">
            <i className="bi bi-zoom-in"></i>
          </a>
          
          <a href="portfolio-details.html" title="More Details" className="details-link text-white">
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
