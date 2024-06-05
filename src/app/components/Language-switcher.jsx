"use client";

import Image from "next/image";
import Language_Icon from "/public/language-solid.svg";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = ({ lng }) => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const onSelectChange = (e) => {
    startTransition(() => {
      const locale = e.target.value;
      router.replace(`/${locale}`);
    });
  };

  return (
    <>
      <div className=" min-[600px]:w-[200px] relative flex gap-1 border-[1px] px-3 py-2 border-white rounded-md focus-visible:outline-1 focus-visible:border-white overflow-hidden">
        <Image
          src={Language_Icon}
          alt="language icon"
          width={20}
          className=" bg-white max-[599px]:hidden "
        />
        <select
          disabled={isPending}
          defaultValue={lng}
          onChange={onSelectChange}
          className=" px-4 py-[6px] flex justify-center absolute bottom-[0px] max-[599px]:right-[3px] min-[600px]:right-2 bg-transparent text-white font-medium text-sm focus:outline-none ">
          <option value="id" className="text-black absolute">
            Bahasa Indonesia
          </option>
          <option value="en" className="text-black">
            English
          </option>
        </select>
      </div>
    </>
  );
};

export default LanguageSwitcher;
