const Footer = () => {
    return (
      <footer className="relative bg-gray-100 py-6 text-center text-gray-700">
        <div className="container mx-auto">
          <div className="copyright">
            <p>
              &copy; <span>Copyright</span>
              <strong className="px-1">iPortfolio</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits text-sm mt-2">
            Designed and Developed by 
            <a href="https://bootstrapmade.com/" className="text-blue-500 hover:underline ml-1">The Catalyst Softwares</a>
            Distributed by 
            <a href="https://themewagon.com" className="text-blue-500 hover:underline ml-1">Neeraj Prajapati</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  