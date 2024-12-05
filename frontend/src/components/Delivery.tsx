import React from "react";
import { Truck, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Delivery = () => {
  const nextDeliveryDate = "Tomorrow, June 9";
  const nextDeliveryTime = "10:00 AM - 2:00 PM";

  return (
      <div className="bg-accent rounded-3xl shadow-xl px-6 py-6 md:px-14 md:py-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Left Image Section */}
        <div className="relative w-full lg:w-[30%] h-48 lg:h-64">
          <Image
            src="/delivery_pup.png"
            alt="Delivery Illustration"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Middle Section: Delivery Info */}
        <div className="flex flex-col gap-4 justify-center items-center text-center w-full lg:w-[60%] ">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">Next-Day Delivery</h2>
          <p className="text-xs text-text font-semibold">
            Get your orders delivered the very next day. <br />
            We make sure your products reach you on time, every time.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="flex items-center space-x-2 flex-nowrap">
              <Clock className="text-text w-4 h-4" />
              <p className="text-xs font-semibold text-text">{nextDeliveryDate}</p>
            </div>
            <div className="flex items-center space-x-2 flex-nowrap">
              <Truck className="text-text w-4 h-4" />
              <p className="text-xs font-semibold text-text">{nextDeliveryTime}</p>
            </div>
          </div>

          <Button
            className="w-auto bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
         
         >
            Learn More
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-[30%] h-48 lg:h-64 hidden xl:block">
          <Image
            src="/banner-img3.png"
            alt="Delivery Banner"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

      </div>
  );
};

export default Delivery;
