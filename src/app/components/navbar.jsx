"use client";

import LanguageSwitcher from "./Language-switcher";
import Button1 from "./button";
import Logo from "./logo";
import { usePathname } from "next/navigation";

const Navbar = ({ lng }) => {
  const pathname = usePathname();

  return (
    <nav className="absolute z-20 w-full py-6 px-6">
      <div className="container flex justify-between max-w-[1180px] mx-auto">
        <Logo lng={lng} />
        <div
          className={`${
            pathname === `/${lng}` ? "flex self-center gap-2 h-8" : "hidden"
          }`}>
          <LanguageSwitcher lng={lng} />
          <Button1 lng={lng} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
