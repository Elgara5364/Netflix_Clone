import Link from "next/link";
// import { footerListEn, footerListId } from "../lib/footerList";
import LanguageSwitcher from "./Language-switcher";
import { useTranslation } from "../i18n";

const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <footer className="bg-black mt-2 py-[72px] ">
      <div className="max-w-xl w-auto container flex flex-col mx-6 lg:mx-10 xl:mx-auto">
        <h6 className="text-[14px] text-[#b6b6b6]">
          {t("footer.link")}{" "}
          <span className="underline">{t("footer.phone-number")}</span>
        </h6>
        <div className="grid grid-cols-2 md:gap-x-10 lg:grid-cols-4 my-3">
          {t("footer.lists", { returnObjects: true }).map((item, index) => (
            <Link
              key={index}
              href={"/#"}
              className="mt-4 text-[#b6b6b6] text-[14px] underline">
              {item.link}
            </Link>
          ))}
        </div>
        <LanguageSwitcher />
        <h6 className="mt-6 text-[14px] text-[#b6b6b6] cursor-default">
          {t("footer.netflix-country")}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
