"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/about",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/"><h1 className="text-4xl font-semibold">Rishi<span className="text-accent">.</span></h1></Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          links.map((link,index)=>{})   
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
