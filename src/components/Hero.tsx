
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lovable-uploads/a9a52b0d-addc-4738-b072-14827f7d395a.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 h-full flex items-center container-padding">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight animate-fade-in">
            Experience Luxury <br />
            <span className="text-hotel-gold">& Comfort</span>
          </h1>
          <p className="mt-4 md:mt-6 text-white text-lg md:text-xl opacity-90 max-w-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Your comfort, our priority.
          </p>
          
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-gold">Book Your Stay</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-hotel-dark">
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
