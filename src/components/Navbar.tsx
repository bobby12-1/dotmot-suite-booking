
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-standard ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="font-serif font-bold text-2xl text-hotel">
                <span className="gold-accent">D</span>otmot
              </h1>
              <span className="ml-1 text-xs uppercase tracking-widest text-hotel-gold">
                Hotel & Suite
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-hotel hover:text-hotel-gold transition-standard font-medium"
            >
              Home
            </a>
            <a
              href="#rooms"
              className="text-hotel hover:text-hotel-gold transition-standard font-medium"
            >
              Rooms
            </a>
            <a
              href="#amenities"
              className="text-hotel hover:text-hotel-gold transition-standard font-medium"
            >
              Amenities
            </a>
            <a
              href="#about"
              className="text-hotel hover:text-hotel-gold transition-standard font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-hotel hover:text-hotel-gold transition-standard font-medium"
            >
              Contact
            </a>
            <Button className="btn-primary">Book Now</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-hotel p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#"
                className="text-hotel hover:text-hotel-gold transition-standard font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#rooms"
                className="text-hotel hover:text-hotel-gold transition-standard font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-hotel hover:text-hotel-gold transition-standard font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#about"
                className="text-hotel hover:text-hotel-gold transition-standard font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-hotel hover:text-hotel-gold transition-standard font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
