import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import ChevronRight from "/public/bx-chevron-right.svg";
import ListLanguageValidation from "./faqListLanguageValidation";

const Faq = ({ t }) => {
  const localActive = useLocale();

  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-xl mx-6 xl:mx-auto">
        <h2 className="text-white text-3xl font-black text-center mb-8">
          {t("Faq.heading")}
        </h2>
        <div></div>
        <div className="mt-11 text-center">
          <ListLanguageValidation language={localActive} />
          <h3 className="text-lg px-5 text-white mt-8">
            {t("Highlight.subheading")}
          </h3>
          <div className="mt-4 flex flex-col lg:flex-row justify-center gap-3 lg:gap-2">
            <input
              className="pt-2 pb-2 px-4 bg-transparent w-3/4 lg:w-[405px] border-[1px] border-#ffffff9a rounded-md text-white mx-auto lg:mx-0 "
              placeholder={t("Highlight.placeholder")}></input>
            <Link
              href={"/#"}
              className="mx-auto lg:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
              <button className="text-white font-medium text-lg ">
                {t("Highlight.button")}
              </button>
              <Image src={ChevronRight} alt="continue" width={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
