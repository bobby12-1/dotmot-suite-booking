
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import BookingForm from "@/components/BookingForm";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Updated room data with new names and prices in Naira
  const rooms = [
    {
      title: "Deluxe Suite",
      price: 25000,
      image: "/lovable-uploads/9a702dd7-83c4-4913-b5b4-94b0a6f77167.png",
      currency: "NGN",
    },
    {
      title: "Executive Suite",
      price: 27500,
      image: "/lovable-uploads/01ca9988-5164-4f50-a0aa-9d14cabb46c6.png",
      currency: "NGN",
    },
    {
      title: "Royal Executive Suite",
      price: 30000,
      image: "/lovable-uploads/ab7dc2ab-460e-43f1-ba13-7697e587f65e.png",
      currency: "NGN",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="hotel-heading text-3xl md:text-4xl font-bold mb-3">
              Welcome to <span className="gold-accent">Dotmot</span> Hotel & Suite
            </h2>
            <div className="w-24 h-1 bg-hotel-gold mb-6"></div>
            <p className="text-gray-600 mb-4">
              Nestled in the heart of Ikole-Ekiti, Dotmot Hotel and Suite offers a perfect blend of luxury, comfort, and impeccable service. Our elegantly appointed rooms and suites are designed to provide you with the utmost comfort and relaxation during your stay.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're visiting for business or leisure, our dedicated staff is committed to ensuring that your experience with us is nothing short of exceptional. From our world-class restaurant to our state-of-the-art facilities, every aspect of Dotmot Hotel is designed with your satisfaction in mind.
            </p>
            <p className="text-gray-600 mb-6">
              <strong className="text-lg text-hotel-dark">Your comfort, our priority</strong> - Experience the perfect harmony of modern luxury and warm hospitality at Dotmot Hotel and Suite.
            </p>
            <Button className="btn-primary">Discover More</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/4124abc7-d80b-479a-a06f-3d5161861850.png"
              alt="Hotel Reception"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <img
              src="/lovable-uploads/3c70a17f-8932-460f-a79e-700b6cb7b873.png"
              alt="Hotel Lounge"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src="/lovable-uploads/6068061e-af63-41a6-ac0b-71bdd41e480a.png"
              alt="Hotel Staircase"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src="/lovable-uploads/a35e670d-5c63-43e4-b07c-f0c4680c4068.png"
              alt="Hotel Corridor"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section-padding bg-gradient-to-br from-red-900 to-black text-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="hotel-heading text-3xl md:text-4xl font-bold mb-3 text-white">
              Our <span className="gold-accent">Rooms & Suites</span>
            </h2>
            <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-xl mx-auto">
              Your comfort, our priority. Discover our range of luxurious accommodations designed for your comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="btn-gold">View All Rooms</Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities />

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-gradient-to-br from-red-800 to-black bg-opacity-5">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="hotel-heading text-3xl md:text-4xl font-bold mb-3 text-white">
              Book Your <span className="gold-accent">Stay</span>
            </h2>
            <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-xl mx-auto">
              Your comfort, our priority. Reserve your perfect room today and experience unparalleled luxury and service.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-gradient-to-br from-red-900 to-black text-white p-8 md:p-12 lg:p-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-hotel-gold">Touch</span>
          </h2>
          <p className="mb-8 opacity-90">
            We'd love to hear from you. Contact us for bookings, inquiries, or to provide feedback on your stay.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-hotel-gold p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-hotel-gold">Phone</h3>
                <p>+2348131367488</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-hotel-gold p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-hotel-gold">Email</h3>
                <p>dotmotsuites@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-hotel-gold p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-hotel-gold">Address</h3>
                <p>Along Ifaki Omuo Road, Ikole-Ekiti, Ekiti State</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="font-medium text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-hotel-dark hover:bg-hotel-gold p-3 rounded-full transition-standard">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5V11.46h3.85l.42-4Z" />
                </svg>
              </a>
              <a href="#" className="bg-hotel-dark hover:bg-hotel-gold p-3 rounded-full transition-standard">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.4,2.3,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7,0,2.7.1.1,2.7,0,7c-.1,1.3,0,1.7,0,5s0,3.7.1,5c.1,4.3,2.7,6.9,7,7,.1,0,.5,0,.9,0h4.1c.5,0,.8,0,.9,0,4.3-.1,6.9-2.7,7-7,.1-1.3,0-1.7,0-5s0-3.7-.1-5c-.1-4.3-2.7-6.9-7-7-1.2,0-1.6,0-5,0Zm0,4.8A7.2,7.2,0,1,0,19.2,12,7.2,7.2,0,0,0,12,4.8Zm0,11.9A4.7,4.7,0,1,1,16.7,12,4.7,4.7,0,0,1,12,16.7Z" />
                </svg>
              </a>
              <a href="#" className="bg-hotel-dark hover:bg-hotel-gold p-3 rounded-full transition-standard">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6c-.77.35-1.6.58-2.46.69.88-.53,1.56-1.37,1.88-2.38-.83.5-1.75.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29,0,.34,0,.67.11.98C8.28,9.09,5.11,7.38,3,4.79c-.37.63-.58,1.37-.58,2.15,0,1.49.75,2.81,1.91,3.56-.71,0-1.37-.2-1.95-.5v.03c0,2.08,1.48,3.82,3.44,4.21a4.22,4.22,0,0,1-1.93.07,4.28,4.28,0,0,0,4,2.98,8.521,8.521,0,0,1-5.33,1.84c-.34,0-.68-.02-1.02-.06C3.44,20.29,5.7,21,8.12,21,16,21,20.33,14.46,20.33,8.79c0-.19,0-.37-.01-.56.84-.6,1.56-1.36,2.14-2.23Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
