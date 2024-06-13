import { GetStartedButton } from "./button";
import { useTranslation } from "../i18n";
import Accordion, { AccordionItem } from "./Accordion";
import Link from "next/link";
import Image from "next/image";
import ChevronRight from "/public/bx-chevron-right.svg";
import { EmailInput } from "./input";

const Faq = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-xl mx-6 xl:mx-auto">
        <h2 className="text-white text-3xl lg:text-5xl  font-black text-center mb-8">
          {t("faq.heading")}
        </h2>
        <div></div>
        <div className="mt-11 text-center">
          <div className="mt-3">
            {t("faq.list", { returnObjects: true }).map((item, index) => (
              <Accordion key={index}>
                <AccordionItem
                  className="h-full"
                  value={index}
                  trigger={item.faq}>
                  {item.ans}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <h3 className="text-lg px-5 text-white mt-8">
            {t("highlight.subheading")}
          </h3>
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-3 md:gap-2">
            <EmailInput lng={lng} />
            <Link
              href={"/#"}
              className="mx-auto md:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
              <GetStartedButton lng={lng} />{" "}
              <Image src={ChevronRight} alt="continue" width={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
