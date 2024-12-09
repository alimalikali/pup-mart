"use client"
import Header from "@/components/Header";
import React from "react";

export default function ProductsLayout({ children }: Readonly<{children: React.ReactNode;}>) {

  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="container flex flex-col gap-8 my-4 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {children}
      </div>
    </div>
  );
}
