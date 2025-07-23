import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { USER_NAME } from "./constants";
import unionLogo from "../assets/images/union.png";

const navLinks = [
  { label: "#home" },
  { label: "#projects" },
  { label: "#experience" },
  { label: "#skills" },
  { label: "#about-me" },
  { label: "#contacts" },
];

const sectionIds = ["home", "projects", "skills", "about-me", "contacts"];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scrollspy effect for home screen
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname === "/projects" ? "projects" : "home");
      return;
    }
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for header
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle nav click
  const handleNavClick = (label: string) => {
    const section = label.replace("#", "");
    if (location.pathname === "/projects") {
      navigate("/", { replace: false });
      setTimeout(() => {
        if (section === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      setActiveSection(section);
      setIsMobileMenuOpen(false);
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle logo/name click
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection("home");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background flex items-center justify-between px-4 md:px-[10vw] h-20">
      {/* Logo and Name */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
        <img src={unionLogo} alt="Logo" className="w-6 h-6" />
        <span className="text-white font-bold text-lg md:text-xl tracking-wide font-mono">{USER_NAME}</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const section = link.label.replace("#", "");
          const isActive = activeSection === section;
          return (
            <span
            key={link.label}
              onClick={() => handleNavClick(link.label)}
              className={`text-base font-mono transition-colors duration-200 cursor-pointer select-none ${
                isActive
                ? "text-primary font-bold"
                : "text-gray hover:text-primary"
            }`}
          >
            {link.label}
        </span>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-gray transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background border-t border-gray transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => {
            const section = link.label.replace("#", "");
            const isActive = activeSection === section;
            return (
              <span
                key={link.label}
                onClick={() => handleNavClick(link.label)}
                className={`px-4 py-3 text-base font-mono transition-colors duration-200 cursor-pointer select-none ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray hover:text-primary"
                }`}
              >
                {link.label}
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header; 