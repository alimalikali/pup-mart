import { GitCommitIcon, Notebook, ShoppingCart, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground  sticky top-0 z-50">
      <div className="container flex xs:flex-row flex-col justify-between items-center py-4 gap-4 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
        <ShoppingCart className="text-primary w-8 h-8" />
          <span className="text-2xl font-semibold text-primary">
            Pup
          </span>
        </Link>

        {/* Links Section */}
        <ul className="flex xs:flex-row flex-col flex-wrap items-center text-sm font-medium text-gray-500 gap-4 md:gap-6">
          <li>
            <Link href="#" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </li>
          {/* <li>
            <Link href="#" className="hover:underline">Licensing</Link>
          </li> */}
          <li>
            <Link href="#" className="hover:underline">Contact</Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/your-profile" target="_blank" className="text-primary hover:text-secondary">
            <GitCommitIcon className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com/your-profile" target="_blank" className="text-primary hover:text-secondary">
            <X className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-primary hover:text-secondary">
            <Notebook className="w-6 h-6" />
          </Link>
        </div>
      </div>
      
      {/* Divider and Copyright */}
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400 mb-4">
        © 2023 <Link href="https://your-website.com" className="hover:underline">PUP™</Link>. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
