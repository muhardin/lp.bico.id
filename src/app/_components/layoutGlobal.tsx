"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LayoutGlobal = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-sans bg-white">
      <Navbar />
      {/* <SideBar /> */}
      {children}
      <Footer />
    </main>
  );
};

export default LayoutGlobal;
