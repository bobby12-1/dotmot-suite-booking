
import React from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-red-900 to-black text-white">
      <div className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 flex items-center">
              <span className="text-hotel-gold">D</span>otmot
              <span className="ml-1 text-xs uppercase tracking-widest text-hotel-gold">
                Hotel & Suite
              </span>
            </h3>
            <p className="mb-6 text-sm opacity-80">
              Your comfort, our priority. Experience luxury and comfort at Dotmot Hotel and Suite, where exceptional service and elegant accommodations await.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hotel-gold transition-standard">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-hotel-gold transition-standard">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-hotel-gold transition-standard">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-hotel-gold shrink-0 mt-0.5" />
                <span className="text-sm">Along Ifaki Omuo Road, Ikole-Ekiti, Ekiti State</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-hotel-gold shrink-0" />
                <a href="tel:+2348131367488" className="text-sm hover:text-hotel-gold transition-standard">
                  +2348131367488
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-hotel-gold shrink-0" />
                <a href="mailto:dotmotsuites@gmail.com" className="text-sm hover:text-hotel-gold transition-standard">
                  dotmotsuites@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-hotel-gold shrink-0" />
                <span className="text-sm">Reception: 24/7</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-hotel-gold transition-standard">Home</a>
              </li>
              <li>
                <a href="#rooms" className="text-sm hover:text-hotel-gold transition-standard">Rooms & Suites</a>
              </li>
              <li>
                <a href="#amenities" className="text-sm hover:text-hotel-gold transition-standard">Amenities</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-hotel-gold transition-standard">Restaurant</a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-hotel-gold transition-standard">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-hotel-gold transition-standard">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 opacity-80">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full bg-hotel-dark text-white rounded-l focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="bg-hotel-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-r transition-standard"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-hotel-dark mt-12 pt-6 text-center">
          <p className="text-sm opacity-80">
            &copy; {currentYear} Dotmot Hotel and Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
