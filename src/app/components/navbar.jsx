"use client";

import Link from "next/link";
import LanguageSwitcher from "./Language-switcher";
import { SignInButton } from "./button";

import Logo from "./logo";
import { usePathname } from "next/navigation";

const Navbar = ({ lng }) => {
  const pathname = usePathname();

  return (
    <header className="absolute z-30 w-full py-6 px-6">
      <nav className="container flex justify-between max-w-[1180px] mx-auto">
        <Logo lng={lng} />
        <div
          className={`${
            pathname === `/${lng}` ? "flex self-center gap-2 h-8" : "hidden"
          }`}>
          <LanguageSwitcher lng={lng} />
          <Link
            href={`/${lng}/login`}
            className="flex px-5 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md self-center h-full">
            <SignInButton lng={lng} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
