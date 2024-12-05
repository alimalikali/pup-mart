"use client";

import { useEffect } from "react";
import { setTheme } from "@/store/index"; // Adjust path
import { Sun, Moon, Zap, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/store/redux";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.global.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "blue", "pink");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const getIcon = (currentTheme: string) => {
    switch (currentTheme) {
      case "light":
        return <Sun className="w-5 h-5 mr-2 text-primary" />;
      case "dark":
        return <Moon className="w-5 h-5 mr-2 text-primary" />;
      case "blue":
      case "pink":
        return <Zap className="w-5 h-5 mr-2 text-primary" />;
      default:
        return <Sun className="w-5 h-5 mr-2 text-primary" />;
    }
  };

  return (
    <div className="flex flex-row focus:outline-none focus:ring-0 focus-visible:right-0">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-4 py-2 bg-background text-primary rounded-lg shadow-md hover:bg-muted transition-all border border-primary focus:outline-none focus:ring-0 focus-visible:right-0">
          {getIcon(theme)}
          <ChevronDown className="w-4 h-4 ml-2" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-background text-text border border-primary">
          <DropdownMenuItem onClick={() => dispatch(setTheme("light"))} className="flex items-center px-4 py-2 hover:bg-muted">
            <Sun className="w-5 h-5 mr-2" /> Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))} className="flex items-center px-4 py-2 hover:bg-muted">
            <Moon className="w-5 h-5 mr-2" /> Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("blue"))} className="flex items-center px-4 py-2 hover:bg-muted">
            <Zap className="w-5 h-5 mr-2" /> Blue
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("pink"))} className="flex items-center px-4 py-2 hover:bg-muted">
            <Zap className="w-5 h-5 mr-2" /> Pink
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
