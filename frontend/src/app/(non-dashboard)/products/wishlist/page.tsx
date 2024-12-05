"use client";

import React from "react";
import { Heart, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Fake dataset
const wishlistData = [
  {
    id: 1,
    title: "Apple MacBook Pro 14-inch",
    description: "M1 Pro chip, 16GB RAM, 512GB SSD",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Headphones",
    description: "Noise cancelling, 30-hour battery life",
    image: "/hero1.jpg",
  },
  {
    id: 3,
    title: "Samsung Galaxy S23 Ultra",
    description: "256GB, Phantom Black",
    image: "/hero1.jpg",
  },
];

const WishList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistData.map((item) => (
          <div
            key={item.id}
            className="relative bg-background rounded-lg shadow-lg p-4 border border-primary transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-text">{item.title}</h2>
              <p className="text-muted text-sm mt-2">{item.description}</p>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button variant="outline" size="sm" className="p-2 hover:bg-accent">
                <Heart className="w-5 h-5 text-pink-500" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 hover:bg-accent">
                <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </div>
            <Button
              variant={"outline"}
              className="mt-4 w-full flex items-center justify-center"
            >
              View Details <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
