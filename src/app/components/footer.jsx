import Image from "next/image";
import Language_Icon from "/public/language-solid.svg";
import Link from "next/link";
import { footerList } from "../lib/footerList";

const Footer = () => {
  return (
    <footer className="bg-black mt-2 py-[72px] ">
      <div className="max-w-xl w-auto container flex flex-col mx-6 lg:mx-10 xl:mx-auto">
        <h6 className="text-[14px] text-[#b6b6b6]">
          Ada pertanyaan? Hubungi{" "}
          <span className="underline">007-803-321-2148</span>
        </h6>
        <div className="grid grid-cols-2 md:gap-x-10 lg:grid-cols-4 my-3">
          {footerList.map((item, index) => (
            <Link
              key={index}
              href={"/#"}
              className="mt-4 text-[#b6b6b6] text-[14px] underline">
              {item}
            </Link>
          ))}
        </div>
        <div className=" w-[200px] mt-4 flex gap-1 border-[1px] px-3 py-1 border-white rounded-md focus-visible:outline-1 focus-visible:border-white  ">
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
        <h6 className="mt-6 text-[14px] text-[#b6b6b6] cursor-default">
          Netflix Indonesia
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
