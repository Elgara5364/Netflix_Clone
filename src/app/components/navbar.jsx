import Image from "next/image";
import Language_Icon from "/public/language-solid.svg";

const Navbar = () => {
  return (
    <nav className="absolute z-20 w-full py-6 ">
      <div className="container flex justify-between  max-w-[1180px] mx-auto">
        <h1 className="font-black text-red-500 text-4xl cursor-default">
          Netflix
        </h1>
        <div className="flex content-center gap-5 ">
          <div className="flex gap-1 self-center border-[1px] px-3 py-1 border-white rounded-md focus-visible:outline-1 focus-visible:border-white ">
            <Image
              src={Language_Icon}
              alt="language icon"
              width={20}
              className=" bg-white  "
            />
            <select className="bg-transparent text-white font-medium text-sm focus:outline-none">
              <option value="id" className="text-black">
                Bahasa Indonesia
              </option>
              <option value="en" className="text-black">
                English
              </option>
            </select>
          </div>
          <div className="flex self-center">
            <button className="bg-red-600 text-sm text-white font-semibold px-4 py-1.5 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
