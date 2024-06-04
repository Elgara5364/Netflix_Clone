import Image from "next/image";
import Language_Icon from "/public/language-solid.svg";
import Link from "next/link";
import { footerListEn, footerListId } from "../lib/footerList";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./Language-switcher";

const Footer = () => {
  const language = useLocale();
  const ValidationLanguage = () => {
    if (language === "id") {
      return (
        <div className="grid grid-cols-2 md:gap-x-10 lg:grid-cols-4 my-3">
          {footerListId.map((item, index) => (
            <Link
              key={index}
              href={"/#"}
              className="mt-4 text-[#b6b6b6] text-[14px] underline">
              {item}
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 md:gap-x-10 lg:grid-cols-4 my-3">
          {footerListEn.map((item, index) => (
            <Link
              key={index}
              href={"/#"}
              className="mt-4 text-[#b6b6b6] text-[14px] underline">
              {item}
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <footer className="bg-black mt-2 py-[72px] ">
      <div className="max-w-xl w-auto container flex flex-col mx-6 lg:mx-10 xl:mx-auto">
        <h6 className="text-[14px] text-[#b6b6b6]">
          Ada pertanyaan? Hubungi{" "}
          <span className="underline">007-803-321-2148</span>
        </h6>
        <ValidationLanguage />
        <LanguageSwitcher />
        <h6 className="mt-6 text-[14px] text-[#b6b6b6] cursor-default">
          Netflix Indonesia
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
