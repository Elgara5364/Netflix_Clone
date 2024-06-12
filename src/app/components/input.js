import { useTranslation } from "../i18n";

export async function EmailInput({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <input
      className="pt-2 pb-2 px-4 bg-transparent w-full md:w-[405px] border-[1px] border-[#a1a1a1] rounded-md text-white  md:mx-0 "
      placeholder={t("highlight.placeholder")}></input>
  );
}

export async function PasswordInput({ lng }) {
  const { t } = await useTranslation(lng, "sign");

  return (
    <input
      className="pt-2 pb-2 px-4 bg-transparent w-full md:w-[405px] border-[1px] border-[#a1a1a1] rounded-md text-white  md:mx-0 "
      placeholder={t("input.placeholder2")}></input>
  );
}
