import Image from "next/image";
import Language_Icon from "/public/language-solid.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute z-20 w-full py-6 px-3">
      <div className="container flex justify-between max-w-[1180px] mx-auto">
        <h1 className="font-black text-red-600 text-3xl lg:text-5xl cursor-default">
          Netflix
        </h1>
        <div className="flex self-center gap-5 h-8">
          <div className="min-[600px]:w-[200px] h-full relative flex gap-1 self-center border-[1px] px-3 py-2 border-white rounded-md focus-visible:outline-1 focus-visible:border-white ">
            <Image
              src={Language_Icon}
              alt="language icon"
              width={20}
              className=" bg-white  "
            />
            <select className="max-[599px]:w-[10px] max-[599px]:block hidden px-4 py-[6px] justify-center  bottom-[0px] right-2 bg-transparent text-white font-medium text-sm focus:outline-none">
              <option value="id" className="text-black ">
                Bahasa
              </option>
              <option value="en" className="text-black">
                En
              </option>
            </select>
            <select className=" px-4 py-[6px] flex justify-center absolute bottom-[0px] right-2 bg-transparent text-white font-medium text-sm focus:outline-none max-[599px]:hidden">
              <option value="id" className="text-black absolute">
                Bahasa Indonesia
              </option>
              <option value="en" className="text-black">
                English
              </option>
            </select>
          </div>
          <Link
            href={"/#"}
            className="flex px-5 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md self-center h-full">
            <button className="text-white font-medium text-[14px] ">
              Mulai
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
