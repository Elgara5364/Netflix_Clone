import Link from "next/link";
import LanguageSwitcher from "./Language-switcher";

const Navbar = ({ t }) => {
  return (
    <nav className="absolute z-20 w-full py-6 px-6">
      <div className="container flex justify-between max-w-[1180px] mx-auto">
        <h1 className="font-black text-red-600 text-3xl lg:text-5xl cursor-default">
          Netflix
        </h1>
        <div className="flex self-center gap-2 h-8">
          <LanguageSwitcher />
          <Link
            href={"/#"}
            className="flex px-5 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md self-center h-full">
            <button className="text-white font-medium text-[14px] ">
              {t("Navbar.button")}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
