"use client";

import Image from "next/image";
import Close from "/public/xmark-solid.svg";
import Plus from "/public/plus-solid.svg";
import { faqList } from "../lib/faqList";
import { useState } from "react";
import ChevronRight from "/public/bx-chevron-right.svg";

const Faq = () => {
  // console.log(faqList);
  const [isOpen, setIsOpen] = useState(false);
  const [indexFaq, setIndexFaq] = useState(0);

  const HandleOpen = (index) => {
    setIndexFaq(index);
    // console.log(item);
    setIsOpen(!isOpen);
  };

  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-[1260px] mx-auto">
        <h2 className="text-white text-5xl font-black text-center">
          Tanya Jawab Umum
        </h2>
        <ul className="mt-8">
          {faqList.map((item, index) => (
            <li key={index} className="mb-2">
              <div
                className=" max-w-[1260px] bg-[#2d2d2d] p-6 flex justify-between  cursor-pointer hover:bg-[#444444] duration-200"
                onClick={() => HandleOpen(index)}>
                <button className="text-2xl font-normal text-white">
                  {item.title}
                </button>
                <Image src={Plus} alt="Read More" width={36} height={36} />
              </div>
              {indexFaq === index && isOpen && (
                <p className="mt-1 text-white text-2xl font-normal max-w-[1260px] bg-[#2d2d2d] p-6">
                  {item.desc}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-11 text-center">
          <h3 className="xl:text-lg text-white">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </h3>
          <div className="mt-4 flex justify-center gap-1.5">
            <input
              className="pt-2 pb-2 px-4 bg-transparent w-[405px] border-[1px] border-#ffffff9a rounded-md text-white"
              placeholder="Alamat Email"></input>
            <div className="flex bg-red-600 px-4 rounded-md">
              <button className="text-white font-medium text-2xl py-3 ">
                Mulai
              </button>
              <Image src={ChevronRight} alt="continue" width={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
