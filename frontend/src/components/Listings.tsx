import React from "react";
import { Heart, Plus, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";


interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

// Define the props type for ListingsCard
interface ListingsCardProps {
  product: Product;
}

// Define the props type for Listings
interface ListingsProps {
  products: Product[];
}

// ListingsCard component (same as before)
const ListingsCard = ({ product }: ListingsCardProps) => {
  return (
    <div className="group relative border border-primary p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-row absolute top-0 right-0 z-[80] items-center gap-2 m-4">
        <Link href="#" className="  bg-primary-100 hover:bg-primary-600  text-primary hover:text-white py-2 px-2 rounded-full  ">
          <Heart size={16} />
        </Link>
      </div>

      <img
        alt={product.imageAlt}
        src={product.imageSrc}
        className="aspect-square w-full rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="product-card__content mt-3">
        <div className="product-card__price mb-4">
          <span className="text-gray-400 text-md font-semibold line-through">${product.price}</span>
          <span className="text-heading text-md font-semibold">
            $14.99 <span className="text-gray-500 font-normal">/Qty</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-gray-600">4.8</span>
          <span className="text-lg font-bold text-warning-600 flex">
            <i className="ph-fill ph-star"></i>
          </span>
          <span className="text-xs font-bold text-gray-600">(17k)</span>
        </div>

        <h6 className="title text-lg font-semibold mt-3 mb-2">
          <Link className="link line-clamp-2" href={product.href}>
            {product.name}
          </Link>
        </h6>

        <div className="flex items-center gap-1">
          <span className="text-main-600 text-md flex">
            <i className="ph-fill ph-storefront"></i>
          </span>
          <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
        </div>

        <div className="mt-3">
          <div
            className="progress w-full bg-color-three rounded-full h-1"
            role="progressbar"
            aria-valuenow={35}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-bar bg-main-600 rounded-full" style={{ width: "35%" }}></div>
          </div>
          <span className="text-gray-900 text-xs font-medium mt-2 inline-block">
            Sold: 18/35
          </span>
        </div>
        <Button className=" bg-primary-100 mt-3  flex items-center rounded-lg text-xs text-primary-600 hover:bg-primary-600 hover:text-white  rounded-pill flex-align gap-2 w-full justify-content-center">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};


// Listings component
const Listings = ({ products }: ListingsProps) => {
  return (
    <div className="flex flex-col gap-4">

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ListingsCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Listings;
