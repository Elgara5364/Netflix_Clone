import { useTranslation } from "../i18n";
import Image from "next/image";
import ChevronRight from "/public/bx-chevron-right.svg";
import Link from "next/link";

export default async function Button1({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <Link
      href={`/${lng}/login-register`}
      className="flex px-5 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md self-center h-full">
      <button className="text-white font-medium text-[14px] ">
        {t("navbar.button")}
      </button>
    </Link>
  );
}

export async function Button2({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <div className="mt-4 flex flex-col md:flex-row justify-center gap-3 md:gap-2">
      <input
        className="pt-2 pb-2 px-4 bg-transparent w-3/4 md:w-[405px] border-[1px] border-#ffffff9a rounded-md text-white mx-auto md:mx-0 "
        placeholder={t("highlight.placeholder")}></input>
      <Link
        href={"/#"}
        className="mx-auto md:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
        <button className="text-white font-medium text-lg ">
          {t("highlight.button")}
        </button>
        <Image src={ChevronRight} alt="continue" width={30} />
      </Link>
    </div>
  );
}
