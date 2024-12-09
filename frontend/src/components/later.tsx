"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Slider arrows

const banners = [
  {
    title: "Discover the Latest Trends",
    description: "Shop fashion, electronics, and more!",
    image: "/hero1.jpg", // Place your images in public folder
    buttonText: "Shop Now",
  },
  {
    title: "Unbeatable Deals",
    description: "Save big on top products today.",
    image: "/hero2.jpg",
    buttonText: "Explore Deals",
  },
  {
    title: "Upgrade Your Lifestyle",
    description: "Find everything you need in one place.",
    image: "/hero3.jpg",
    buttonText: "Start Shopping",
  },
  {
    title: "Unbeatable Deals",
    description: "Save big on top products today.",
    image: "/hero2.jpg",
    buttonText: "Explore Deals",
  },
  {
    title: "Discover the Latest Trends",
    description: "Shop fashion, electronics, and more!",
    image: "/hero1.jpg", // Place your images in public folder
    buttonText: "Shop Now",
  },
  {
    title: "Unbeatable Deals",
    description: "Save big on top products today.",
    image: "/hero2.jpg",
    buttonText: "Explore Deals",
  },
  {
    title: "Upgrade Your Lifestyle",
    description: "Find everything you need in one place.",
    image: "/hero3.jpg",
    buttonText: "Start Shopping",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slide Content */}
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
              <p className="text-lg mb-6">{banner.description}</p>
              <Button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full">
                {banner.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white rounded-full hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white rounded-full hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </section>
  );
};

export default Hero;
