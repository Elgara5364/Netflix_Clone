import Link from "next/link";
// import { footerListEn, footerListId } from "../lib/footerList";
import LanguageSwitcher from "./Language-switcher";
import { useTranslation } from "../i18n";

export async function Footer({ lng }) {
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
        <LanguageSwitcher lng={lng} />
        <h6 className="mt-6 text-[14px] text-[#b6b6b6] cursor-default">
          {t("footer.netflix-country")}
        </h6>
      </div>
    </footer>
  );
}

export async function FooterLogin({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <>
      <footer className="bg-black py-8  ">
        <div className="max-w-xl w-auto container flex flex-col mb-3 lg:mx-10 xl:mx-auto">
          <h6 className="text-[14px] text-[#b6b6b6]">
            {t("footer.link")}{" "}
            <span className="underline cursor-pointer">
              {t("footer.phone-number")}
            </span>
          </h6>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:gap-x-10 lg:grid-cols-4 my-3 text-[#aeaeae] text-sm">
            <Link href={"/#"} className="underline ">
              {t("footer.lists.0.link")}
            </Link>
            <Link href={"/#"} className="underline ">
              {t("footer.lists.1.link")}
            </Link>
            <Link href={"/#"} className="underline ">
              {t("footer.lists.9.link")}
            </Link>
            <Link href={"/#"} className="underline ">
              {t("footer.lists.10.link")}
            </Link>
            <Link href={"/#"} className="underline ">
              {t("footer.lists.11.link")}
            </Link>
            <Link href={"/#"} className="underline ">
              {t("footer.lists.12.link")}
            </Link>
          </div>
          <div className="mt-4 w-[195px] h-8">
            <LanguageSwitcher lng={lng} />
          </div>
        </div>
      </footer>
    </>
  );
}
