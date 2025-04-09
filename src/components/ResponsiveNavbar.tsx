import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HeaderLink } from "./HeaderLink";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[8vh]">
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <nav className="max-w-6xl mx-auto rounded-full bg-white bg-opacity-15 backdrop-blur-lg border border-white border-opacity-20 shadow-lg">
          <div className="px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xl font-bold text-gray-800">
                    AZDEV PH
                  </span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <HeaderLink href="/">Home</HeaderLink>
                  <HeaderLink href="/blog">Blog</HeaderLink>
                  <HeaderLink href="/about">About</HeaderLink>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:bg-white hover:bg-opacity-30 focus:outline-none"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white bg-opacity-15 backdrop-blur-lg border border-white border-opacity-20 shadow-lg px-4 pt-2 pb-3 space-y-1">
              <HeaderLink
                className="block px-3 py-2 rounded-full text-gray-800 font-medium hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                href="/"
              >
                Home
              </HeaderLink>
              <HeaderLink
                className="block px-3 py-2 rounded-full text-gray-800 font-medium hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                href="/blog"
              >
                Blog
              </HeaderLink>
              <HeaderLink
                className="block px-3 py-2 rounded-full text-gray-800 font-medium hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                href="/about"
              >
                About
              </HeaderLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
