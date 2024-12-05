"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Type definition for a testimonial
interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  feedback: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="relative rounded-xl isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-text sm:text-4xl">Testimonials</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        //   pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mt-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex flex-col items-center text-center">
              <figure>
                <blockquote className="text-xl font-semibold text-text sm:text-2xl">
                  <p>“{testimonial.feedback}”</p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto h-16 w-16 rounded-full"
                  />
                  <div className="mt-4 flex flex-col items-center space-y-1 text-base">
                    <div className="font-semibold text-text">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-6">
          <button
            className="custom-prev flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            className="custom-next flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}