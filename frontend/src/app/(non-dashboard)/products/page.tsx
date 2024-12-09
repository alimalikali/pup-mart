import React from "react";
import Link from "next/link";
import FilterComponent from "@/components/FilterComponent";

const products = [
  { id: 1, name: "Product 1", price: "$100" },
  { id: 2, name: "Product 2", price: "$150" },
  { id: 3, name: "Product 2", price: "$150" },
  { id: 4, name: "Product 2", price: "$150" },
  { id: 5, name: "Product 2", price: "$150" },
  { id: 6, name: "Product 2", price: "$150" },
  { id: 7, name: "Product 2", price: "$150" },
  { id: 8, name: "Product 2", price: "$150" },
  { id: 9, name: "Product 2", price: "$150" },

];


const Child = () => {
  return (
    <div className="flex flex-col gap-8  mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}



export default function ProductsPage() {
  return (
    <div className="">
      <FilterComponent>
        <Child />
      </FilterComponent>
    </div>
  );
}
