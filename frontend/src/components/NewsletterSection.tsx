import React from "react";
import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsletterSection = () => {
  return (
    <section className=" text-center">
      <div className="bg-primary-100 border border-primary rounded-3xl shadow-xl p-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-text mb-4">Stay Updated!</h2>
        <p className="text-lg text-text/80 mb-8">
          Subscribe to our newsletter and never miss out on our latest updates and offers.
        </p>
        
        {/* Form Section */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-2/3">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text w-5 h-5" />
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="pl-10 py-3 rounded-lg border border-gray-900 focus:ring-none focus:outline-none w-full" 
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Notify Me
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
