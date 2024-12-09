import Category from "@/components/CategoryHighlights";
import Delivery from "@/components/Delivery";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import NewsletterSection from "@/components/NewsletterSection";
import Testimonials from "@/components/Testimonials";

const categories = [
  { id: 1, name: "Vegetables", image: "/category/v1.png" },
  { id: 4, name: "Meat", image: "/category/v1.png" },
  { id: 5, name: "Beverages", image: "/category/v2.png" },
  { id: 6, name: "Snacks", image: "/category/v3.png" },
];

const heroSlides = [
  { id: 1, name: 'Vegetables', image: '/category/v1.png', alt: "Fresh Groceries" },
  { id: 2, name: 'Meat', image: '/category/v2.png', alt: "Fresh Groceries" },
  { id: 3, name: 'Beverages', image: '/category/v3.png', alt: "Fresh Groceries" },
];

const products = [
  {
    id: 1,
    name: "Taylor Farms Broccoli Florets",
    href: "/products/1",
    imageSrc: "/banner-img3.png",
    imageAlt: "Fresh Broccoli Florets",
    price: "$14.99",
    color: "Green",
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    href: "/products/2",
    imageSrc: "/banner-img3.png",
    imageAlt: "Juicy Red Strawberries",
    price: "$9.99",
    color: "Red",
  },
  {
    id: 3,
    name: "Organic Bananas",
    href: "/products/3",
    imageSrc: "/banner-img3.png",
    imageAlt: "Organic Yellow Bananas",
    price: "$4.99",
    color: "Yellow",
  },
  {
    id: 4,
    name: "Almond Milk - 1L",
    href: "/products/4",
    imageSrc: "/banner-img3.png",
    imageAlt: "Almond Milk Carton",
    price: "$7.99",
    color: "White",
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    href: "/products/5",
    imageSrc: "/banner-img3.png",
    imageAlt: "Loaf of Whole Wheat Bread",
    price: "$3.99",
    color: "Brown",
  },
  {
    id: 6,
    name: "Fresh Avocados",
    href: "/products/6",
    imageSrc: "/banner-img3.png",
    imageAlt: "Fresh Green Avocados",
    price: "$5.49",
    color: "Green",
  },
  {
    id: 7,
    name: "Blueberry Yogurt - 500g",
    href: "/products/7",
    imageSrc: "/banner-img3.png",
    imageAlt: "Blueberry Yogurt Cup",
    price: "$6.99",
    color: "Purple",
  },
  {
    id: 8,
    name: "Organic Eggs - Dozen",
    href: "/products/8",
    imageSrc: "/banner-img3.png",
    imageAlt: "Carton of Organic Eggs",
    price: "$4.79",
    color: "White",
  },
];


const testimonialsData = [
  {
    id: 1,
    name: "Judith Black",
    title: "CEO of Workcation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&h=256&q=80",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Marketing Head at TechCorp",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&q=80",
    feedback: "Numquam corrupti in laborum sed rerum et corporis. Lorem ipsum dolor sit amet.",
  },
  // Add more testimonials as needed
];

const Landing = () => {
  return (
    <div className=" flex flex-col gap-8 ">
      <Hero slides={heroSlides} />
      <Category categories={categories} />
      <Listings products={products} /> 
      <Delivery />
      <Testimonials testimonials={testimonialsData} />
      <NewsletterSection />
      {/* <Promo /> */}
    </div>
  );
};

export default Landing;
