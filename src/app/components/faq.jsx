"use client";

import Link from "next/link";
import Image from "next/image";
import Close from "/public/xmark-solid.svg";
import Plus from "/public/plus-solid.svg";
import { faqList } from "../lib/faqList";
import { useState } from "react";
import ChevronRight from "/public/bx-chevron-right.svg";
import clsx from "clsx";
import Accordion, { AccordionItem } from "./Accordion";

const Faq = () => {
  // console.log(faqList);

  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-xl mx-6 xl:mx-auto">
        <h2 className="text-white text-3xl font-black text-center mb-8">
          Tanya Jawab Umum
        </h2>
        <div>
          {faqList.map((item, index) => (
            <Accordion key={index}>
              <AccordionItem
                className="h-full"
                value={index}
                trigger={item.title}>
                {item.desc}
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="mt-11 text-center">
          <h3 className="text-lg px-5 text-white">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </h3>
          <div className="mt-4 flex flex-col lg:flex-row justify-center gap-3 lg:gap-2">
            <input
              className="pt-2 pb-2 px-4 bg-transparent w-3/4 lg:w-[405px] border-[1px] border-#ffffff9a rounded-md text-white mx-auto lg:mx-0 "
              placeholder="Alamat Email"></input>
            <Link
              href={"/#"}
              className="mx-auto lg:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
              <button className="text-white font-medium text-lg ">Mulai</button>
              <Image src={ChevronRight} alt="continue" width={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
