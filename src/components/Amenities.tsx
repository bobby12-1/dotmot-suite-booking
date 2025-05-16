
import React from "react";
import { 
  Wifi, 
  UtensilsCrossed, 
  Car, 
  Dumbbell, 
  Pool, 
  Flower2, 
  Wine, 
  Users, 
  ShieldCheck 
} from "lucide-react";

const amenitiesList = [
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the hotel",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8" />,
    title: "Restaurant",
    description: "Exquisite dining with local and international cuisine",
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Free Parking",
    description: "Convenient and secure on-site parking",
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Fitness Center",
    description: "Modern equipment for your daily workout routine",
  },
  {
    icon: <Pool className="h-8 w-8" />,
    title: "Swimming Pool",
    description: "Refreshing outdoor pool with lounging area",
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Spa Services",
    description: "Relaxing treatments and massages available",
  },
  {
    icon: <Wine className="h-8 w-8" />,
    title: "Bar & Lounge",
    description: "Cozy atmosphere to enjoy drinks and conversation",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Event Spaces",
    description: "Venues for conferences, weddings and special occasions",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "24/7 Security",
    description: "Round-the-clock security for your peace of mind",
  },
];

const AmenityCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-standard flex flex-col items-center text-center">
      <div className="text-hotel-gold mb-4">{icon}</div>
      <h3 className="text-lg font-serif font-semibold text-hotel-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Amenities = () => {
  return (
    <section id="amenities" className="bg-hotel-light section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="hotel-heading text-3xl md:text-4xl font-bold mb-3">
            Hotel <span className="gold-accent">Amenities</span>
          </h2>
          <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Enhance your stay with our premium amenities and services designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {amenitiesList.map((amenity, index) => (
            <AmenityCard
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
