
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Wifi, Coffee, Tv, Bath } from "lucide-react";

interface RoomCardProps {
  title: string;
  price: number;
  image: string;
  size: string;
  capacity: string;
  hasWifi?: boolean;
  hasBreakfast?: boolean;
  hasTV?: boolean;
  hasBathroom?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  price,
  image,
  size,
  capacity,
  hasWifi = true,
  hasBreakfast = true,
  hasTV = true,
  hasBathroom = true,
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-standard h-full flex flex-col bg-gradient-to-br from-red-600 to-black text-white">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-standard hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-hotel-gold text-white px-4 py-1 rounded-full text-sm font-medium">
          ${price}/night
        </div>
      </div>
      <CardHeader>
        <CardTitle className="hotel-heading text-2xl text-white">{title}</CardTitle>
        <CardDescription className="flex justify-between text-gray-300">
          <span>{size}</span>
          <span>{capacity}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex space-x-4 mt-4">
          {hasWifi && (
            <div className="flex items-center text-gray-300" title="Free WiFi">
              <Wifi className="h-4 w-4 mr-1" />
              <span className="text-xs">WiFi</span>
            </div>
          )}
          {hasBreakfast && (
            <div className="flex items-center text-gray-300" title="Breakfast Included">
              <Coffee className="h-4 w-4 mr-1" />
              <span className="text-xs">Breakfast</span>
            </div>
          )}
          {hasTV && (
            <div className="flex items-center text-gray-300" title="Smart TV">
              <Tv className="h-4 w-4 mr-1" />
              <span className="text-xs">Smart TV</span>
            </div>
          )}
          {hasBathroom && (
            <div className="flex items-center text-gray-300" title="Private Bathroom">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-xs">Bathroom</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-hotel-gold hover:bg-yellow-600 text-white w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
