import Link from "next/link";
import { useTranslation } from "../i18n";
import { LearnMore, SignInButton, SignInCodeButton } from "./button";

const Form = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <form className=" h-full flex flex-col gap-4 ">
      <div className=" relative h-14 px-4 border-2 border-[#7e7e7e]  rounded-md ">
        <input
          id="emailInput"
          name="emailInput"
          type="email"
          required
          className="relative top-5 w-full bg-transparent focus:outline-0 text-white peer"></input>
        <label
          htmlFor="emailInput"
          className="absolute top-4 left-4 text-base peer-focus:text-[13px] duration-150 text-[#aeaeae] peer-focus:top-0 peer-focus:text-[#aeaeae] peer-valid:top-0 peer-valid:text-[13px] ">
          {t("sign.input.placeholder1")}
        </label>
      </div>
      <div className="relative h-14 px-4 border-2 border-[#7e7e7e]  rounded-md ">
        <input
          id="passwordInput"
          name="passwordInput"
          type="password"
          required
          className="relative top-5 w-full bg-transparent focus:outline-0 text-white peer"></input>
        <label
          htmlFor="passwordInput"
          className="absolute top-4 left-4 text-base peer-focus:text-[13px] duration-150 text-[#aeaeae] peer-focus:top-0 peer-focus:text-[#aeaeae] peer-valid:top-0 peer-valid:text-[13px]">
          {t("sign.input.placeholder2")}
        </label>
      </div>
      <div>
        <Link
          href={"/#"}
          className="flex justify-center self-center px-4 py-2.5 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md h-full">
          <SignInButton lng={lng} />
        </Link>
      </div>
      <p className="text-[#aeaeae] text-base mx-auto">{t("sign.or")}</p>
      <div>
        <Link
          href={"/"}
          className="flex justify-center bg-[#80808066] px-4 py-2.5 rounded-md">
          <SignInCodeButton lng={lng} />
        </Link>
      </div>
      <Link href={"/"} className="text-white text-base mx-auto">
        {t("sign.forgot-password")}
      </Link>
      <footer className="mt-5 h-auto pb-7">
        <div>
          <input
            htmlFor="remember-me"
            type="checkbox"
            className="me-3 peer"></input>
          <label id="remember-me" className="text-white ">
            {t("sign.footer.remember-me")}
          </label>
        </div>
        <p className="mt-4 text-[#aeaeae] ">
          {t("sign.footer.new-to-netflix")}
          <Link href={"/"} className="text-white">
            {" "}
            {t("sign.footer.sign-up-link")}
          </Link>
        </p>
        <LearnMore lng={lng} />
      </footer>
    </form>
  );
};

export default Form;
