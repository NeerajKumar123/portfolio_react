import { useState } from "react";
import akshi from "./assets/akshi.jpeg"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white flex flex-col items-center p-4 w-72 fixed top-0 left-0 h-full z-50 shadow-lg">
      {/* Toggle Button */}
      <i className="xl:hidden text-2xl cursor-pointer bi bi-list"></i>

      {/* Profile Image */}
      <div className="w-24 h-24 my-4">
        <img
          src={akshi}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Logo */}
      <a href="index.html" className="text-center">
        <h1 className="text-xl font-bold">Neeraj Prajapati</h1>
      </a>

      {/* Social Links */}
      <div className="flex gap-3 my-4">
        <a href="#" className="text-xl bi bi-twitter-x"></a>
        <a href="#" className="text-xl bi bi-facebook"></a>
        <a href="#" className="text-xl bi bi-instagram"></a>
        <a href="#" className="text-xl bi bi-skype"></a>
        <a href="#" className="text-xl bi bi-linkedin"></a>
      </div>

      {/* Navigation Menu */}
      <nav className="w-full">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#hero" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-house"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-person"></i> About
            </a>
          </li>
          <li>
            <a href="#resume" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-file-earmark-text"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-images"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-hdd-stack"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <i className="bi bi-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;