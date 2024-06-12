import Image from "next/image";
import HeroImage from "/public/ID-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { useTranslation } from "../i18n";
import ChevronRight from "/public/bx-chevron-right.svg";
import Link from "next/link";
import { EmailInput } from "./input";
import { GetStartedButton } from "./button";

const Highlight = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <section className="relative h-auto  overflow-hidden">
      <div className="absolute h-[100%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          quality={100}
          style={{ objectFit: "cover" }}
          className="h-full"
        />
      </div>
      <div className="px-6 py-6 bg-gradient-to-b from-black/75 from-20% via-transparent/50 to-black/75 to-80% relative w-full h-full ">
        <div className="h-full max-md:pt-[70px] pb-8 pt-[120px] text-center">
          <h1 className="font-black text-[32px] lg:text-5xl text-white  ">
            {t("highlight.heading")}
          </h1>
          <p className="text-white font-normal md:text-base lg:text-2xl mt-4">
            {t("highlight.par")}
          </p>
          <div className="mt-6">
            <h3 className="max-w-[600px] mx-auto text-base lg:text-2xl text-white">
              {t("highlight.subheading")}
            </h3>
            <div className="mt-4 flex flex-col md:flex-row justify-center gap-3 md:gap-2">
              <EmailInput lng={lng} />
              <Link
                href={"/#"}
                className="mx-auto md:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
                <GetStartedButton lng={lng} />
                <Image src={ChevronRight} alt="continue" width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
