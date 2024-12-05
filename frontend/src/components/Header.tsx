"use client"

import { Search, ShoppingCart, Heart, Menu } from "lucide-react"; // Added Menu for the hamburger icon
import { useState } from "react"; // To manage the sidebar state
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog"; // Importing Dialog from Shadcn UI

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for toggling the sidebar

  return (
    <header className="bg-background text-foreground sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4 gap-4 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">

        {/* Left: Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="text-primary w-8 h-8" />
            <h1 className="text-2xl md:text-3xl font-extrabold text-primary">
              PupMart
            </h1>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow hidden md:flex items-center justify-center">
          <div className="relative max-w-96 min-w-96">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-4 pr-12 py-2 bg-secondary text-text rounded-lg focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary w-6 h-6" />
          </div>
        </div>

        {/* Right: Icons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/wishlist" className="hover:text-text text-primary">
            <Heart className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="hover:text-text text-primary">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>

        {/* Mobile: Hamburger Icon */}
        <div className="md:hidden">
          <Menu
            className="text-primary w-6 h-6 cursor-pointer"
            onClick={() => setSidebarOpen(true)} // Open the sidebar on click
          />
        </div>
      </div>

      {/* Mobile Sidebar using Dialog from Shadcn UI */}
      <Dialog open={sidebarOpen} onOpenChange={setSidebarOpen} >
        <DialogTrigger asChild>
          {/* Invisible trigger to handle closing sidebar */}
          <div />
        </DialogTrigger>

        <DialogContent className=" w-[80%]  bg-background p-4 space-y-4 rounded-xl">
          <DialogTitle>
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingCart className="text-primary w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-primary">
                PupMart
              </h1>
            </Link>
          </DialogTitle>
          <div className="flex flex-col items-start gap-2">
            {/* <Link href="/" className="text-lg text-primary" onClick={() => setSidebarOpen(false)}>
              Home
            </Link> */}
            <Link href="/products/wishlist" className="text-lg text-primary flex flex-row" onClick={() => setSidebarOpen(false)}>
              <Heart className="w-6 h-6 mr-2" />
              Wishlist
            </Link>
            <Link href="/cart" className="text-lg text-primary flex flex-row" onClick={() => setSidebarOpen(false)}>
              <ShoppingCart className="w-6 h-6 mr-2" />
              Cart
            </Link>
            <div className="flex justify-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </DialogContent>

      </Dialog>
    </header>
  );
};

export default Header;
