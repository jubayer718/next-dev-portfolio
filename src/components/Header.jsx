import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (  
  <header className="py-8 xl:py-12 text-white">
      <div className="container px-10 mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Jubayer<span className="text-[#00ff99]">.</span></h1>
        </Link>


        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>


        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>

        </div>
        
    </div>
  </header>)
};

export default Header;