
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

interface RoomCardProps {
  title: string;
  price: number;
  image: string;
  currency?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  price,
  image,
  currency = "NGN"
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
          {currency} {price.toLocaleString()}/night
        </div>
      </div>
      <CardHeader>
        <CardTitle className="hotel-heading text-2xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-300 text-sm">Your comfort, our priority</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-hotel-gold hover:bg-yellow-600 text-white w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
