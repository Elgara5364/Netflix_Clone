"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n";
import { useEffect, useState } from "react";

export async function SignInButton({ lng }) {
  const pathname = usePathname();
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <button
      className={
        pathname === `/${lng}/login-register`
          ? "text-white font-medium text-base "
          : "text-white font-medium text-[14px] "
      }>
      {t("navbar.button")}
    </button>
  );
}

export async function GetStartedButton({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <button className="text-white font-medium text-lg ">
      {t("highlight.button")}
    </button>
  );
}

export async function SignInCodeButton({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <button className="text-white font-medium text-base">
      {t("sign.button")}
    </button>
  );
}

export async function LearnMore({ lng }) {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <>
      <small className="mt-3 text-[#aeaeae]">
        <p className="my-3">
          {t("sign.footer.terms-of-use")}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline hover:decoration-solid">
            {/* {t("sign.footer.learn-more")} */}
          </button>
        </p>
        <div className="mt-3 relative text-[#aeaeae] select-none">
          {t("sign.footer.terms-of-use-details")}
          <Link
            href={"/"}
            className="text-blue-600 hover:underline hover:decoration-solid ">
            {t("sign.footer.privacy-policy")}
          </Link>
          {t("sign.footer.and")}
          <Link
            href={"/"}
            className="text-blue-600 hover:underline hover:decoration-solid ">
            {t("sign.footer.terms-of-service")}
          </Link>
          {t("sign.footer.terms-of-details2")}
        </div>
      </small>
    </>
  );
}
