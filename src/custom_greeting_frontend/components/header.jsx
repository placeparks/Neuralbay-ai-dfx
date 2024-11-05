import Logo from "../public/images/logo.png";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const links = [
    { label: "Marketplace", link: "/marketplace" },
    { label: "Categories", link: "" },
    { label: "Learn More", link: "" },
  ];
  return (
    <header className="fixed inset-x-0 py-4 top-0 z-50 bg-[rgba(1,0,31,0.30)] backdrop-blur-[12px]">
      <nav className="container flex items-center max-lg:justify-between gap-16">
        <a href="/">
          <img src={Logo} alt="img" />
        </a>
        <div className="flex-grow flex items-center justify-between max-lg:hidden">
          <ul className="flex gap-8">
            {links.map((item, index) => (
              <li key={index} className="text-sm">
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="space-x-6">
            <a href="/marketplace/upload"><Button className="rounded-md" variant={`secondary`}>Upload</Button></a>
          
            <Button>Login</Button>
          </div>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <IoMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent className="lg:hidden bg-[rgba(1,0,31,1)] flex flex-col gap-8 pt-16 border-none">
            <ul className="flex flex-col gap-8">
              {links.map((item, index) => (
                <li key={index} className="text-sm">
                  <SheetClose asChild>
                    <a href={item.link}>{item.label}</a>
                  </SheetClose>
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-4">
              <Button variant={`secondary`}>Signup</Button>
              <Button>Login</Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
