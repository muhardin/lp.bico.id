"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Set initial scroll state
    handleScroll(); // Check scroll position on mount

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="fixed-navbar"
      className={`h-16 lg:h-20 ease-in-out duration-500 fixed w-full z-40 flex justify-between items-center ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <Link href="/">
        <Image
          loading="lazy"
          className="h-[50px] object-contain ml-5 lg:h-[60px] xl:mt-0 2xl:ml-52 lg:ml-16"
          src="/images/logo.png"
          alt="icx-logo"
          width={150}
          height={40}
        />
      </Link>
      <div className="hidden font-medium lg:flex">
        <Link href="/ico">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ICO
          </p>
        </Link>
        <Link href="/projects">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Project
          </p>
        </Link>
        <Link href="/icx-pasti">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ICX Pasti
          </p>
        </Link>
        <Link href="/about-us">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            About Us
          </p>
        </Link>
        <Link href="/icx-connect">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ICX Connect
          </p>
        </Link>
        <Link href="/blog">
          <p
            className={`text-md mx-5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Blog
          </p>
        </Link>
      </div>
      <div
        className={`lg:flex space-x-6 font-medium hidden items-center ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <button>Login</button>
        <button className="px-5 py-2 rounded-lg bg-brand-4000 text-white text-sm font-light bg-green-700">
          Hubungi Kami
        </button>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="flex items-center p-3 text-white">
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-gradient-to-br from-black via-black to-gray-600 z-50 text-white space-y-0 ease-in-out duration-500 border-none w-full"
          >
            <SheetHeader>
              <SheetDescription className="w-full pt-0">
                {/* <SideBar /> */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
