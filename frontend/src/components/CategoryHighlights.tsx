import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

// Define the type for the category data
type Category = {
  id: number;
  name: string;
  image: string;
};

// Define the props for CategoryHighlights component
type CategoryHighlightsProps = {
  categories: Category[];
};

const CategoryHighlights = ({ categories }: CategoryHighlightsProps) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryBox key={category.id} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

// Define the props for CategoryBox component
type CategoryBoxProps = {
  name: string;
  image: string;
};

const CategoryBox = ({ name, image }: CategoryBoxProps) => {
  return (
    <div className="bg-accent rounded-3xl overflow-hidden h-[200px] flex">
      {/* Left side - Text (Category and Shop Now) */}
      <div className="flex flex-col justify-center p-4 gap-2 text-left w-1/2">
        <h3 className="text-2xl font-semibold text-text w-auto">{name}</h3>
        <Button 
        className="w-full bg-primary text-white py-3 px-8 rounded-lg text-xs font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
          Shop Now
        </Button>
      </div>

      {/* Right side - Image */}
      <div className="relative w-1/2 overflow-hidden flex items-center justify-center">
        {/* Image is positioned to show only the left part (70%) and hide the right part (30%) */}
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover transform  translate-x-[20%]" // Hide 30% of the image
        />
      </div>
    </div>
  );
};

export default CategoryHighlights;
