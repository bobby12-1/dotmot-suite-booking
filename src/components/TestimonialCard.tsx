
import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  text,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-standard">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-hotel-gold flex items-center justify-center text-white font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-hotel-dark">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? "text-hotel-gold fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic text-sm">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
