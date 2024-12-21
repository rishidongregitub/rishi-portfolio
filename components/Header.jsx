import Link from "next/link";
import { Button } from "./ui/button";

//Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo Section*/}
        <Link href="#">
          <h1 className="text-4xl font-semibold">
            Rishi <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Navbar Section & Hire Me Button*/}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Button>Hire me</Button>
        </div>
        {/*Mobile Nav*/}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};
