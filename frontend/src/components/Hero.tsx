"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

// Define the type for the category data
type HeroSlides = {
  id: number;
  alt: string;
  image: string;
};
// Define the props for HeroSlidesProps component
type HeroSlidesProps = {
  slides: HeroSlides[];
};
const Hero = ({ slides }: HeroSlidesProps) => {



  return (
    <div className="flex justify-center items-center">
      <div className="relative max-h-[80vh] w-full rounded-3xl bg-accent px-6 py-6 md:px-14 md:py-8 flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 md:space-x-12 shadow-lg">

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-slate-50">
            Daily Grocery at Your Home <br />
            <span className="text-primary dark:text-primary-400">Cash on Delivery</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Fresh groceries delivered to your doorstep within hours. No hassle, no delays.
          </p>
          <Button className="bg-primary hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-700 flex items-center gap-3 px-5 py-3 rounded-lg shadow-md text-sm md:text-base">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            Order Now
          </Button>
        </div>


        {/* Swiper Section */}
        <div className="relative w-full max-w-[250px] sm:max-w-[300px] h-auto rounded-full overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Arrows */}
        <ChevronLeft className="swiper-button-prev absolute top-1/2 left-2 !ml-0 transform -translate-y-1/2 cursor-pointer z-20 w-8 h-8 !text-text !hover:text-secondary transition sm:w-10 sm:h-10 " />
        <ChevronRight className="swiper-button-next absolute top-1/2 right-2 !mr-0  transform -translate-y-1/2 cursor-pointer z-20 w-8 h-8 !text-text !hover:text-secondary transition sm:w-10 sm:h-10 " />
      </div>
    </div>
  );
};

export default Hero;
