import React, { useState } from "react";
import { Sun, Moon, Menu, X, UserCircle } from "lucide-react";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <button className="text-gray-900 dark:text-white text-xl font-bold">
              CodeGenius.Dev
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              className="text-gray-900 dark:text-white text-lg font-bold"
              href="https://portfolio.triplealpha.blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>CodeGenius.Dev</h2>
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2"
              >
                <UserCircle className="w-7 h-7 text-gray-600 dark:text-gray-300" />
                anuthing
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 z-50 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-700"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 py-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Transactions
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Reports
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
