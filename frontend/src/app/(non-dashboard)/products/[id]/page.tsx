
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default async function ProductReview({ params}: {  params: Promise<{ id: string }>}) {

  const id = (await params).id

  const dataset = {
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
    darkImage: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
    title: 'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink',
    price: 1249.99,
    rating: 5,
    reviews: 345,
    description:
      "Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience.",
  };

  const { image, darkImage, title, price, rating, reviews, description } = dataset;

  return (
    <section className="md:py-8   container flex flex-col md:flex-row  justify-around gap-8 my-4 ">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <Image width={300} height={300} className="w-full dark:hidden" src={image} alt={title} />
        <Image width={300} height={300} className="w-full hidden dark:block" src={darkImage} alt={title} />
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1>Post {id}</h1>
        <h1 className="text-xl font-semibold text-text sm:text-2xl ">
          {title}
        </h1>


        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-text sm:text-3xl ">
            ${price}
          </p>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-300" : "text-gray-300"}`} />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({rating}.0)</p>
            <a href="#" className="text-sm font-medium text-primary  underline  hover:no-underline">
              {reviews} Reviews
            </a>
          </div>
        </div>

        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Heart className="w-5 h-5" /> Add to favorites
          </Button>

          <Button className="flex items-center gap-2 mt-4 sm:mt-0">
            <ShoppingCart className="w-5 h-5" /> Add to cart
          </Button>
        </div>

        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

        <p className="mb-6 text-gray-500">{description}</p>
      </div>
    </section>
  );
}
