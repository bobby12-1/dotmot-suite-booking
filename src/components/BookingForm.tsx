
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    rooms: "1",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log("Booking form submitted:", formData);
    
    // Show success message
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    // Reset form (optional)
    setFormData({
      checkIn: "",
      checkOut: "",
      adults: "2",
      children: "0",
      rooms: "1",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="hotel-heading text-2xl font-bold mb-6">Book Your Stay</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
              Check In Date
            </label>
            <Input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
              Check Out Date
            </label>
            <Input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              min={formData.checkIn || new Date().toISOString().split("T")[0]}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
              Adults
            </label>
            <Select
              value={formData.adults}
              onValueChange={(value) => handleSelectChange("adults", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
              Children
            </label>
            <Select
              value={formData.children}
              onValueChange={(value) => handleSelectChange("children", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[0, 1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">
              Rooms
            </label>
            <Select
              value={formData.rooms}
              onValueChange={(value) => handleSelectChange("rooms", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-hotel font-medium mb-2 mt-2">Personal Information</h4>
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 123-4567"
              className="w-full"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={3}
              placeholder="Let us know if you have any special requests..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-hotel focus:outline-none focus:ring-1 focus:ring-hotel"
            ></textarea>
          </div>
          
          <div className="md:col-span-2">
            <Button type="submit" className="btn-gold w-full">
              Book Now
            </Button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              By clicking "Book Now", you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
