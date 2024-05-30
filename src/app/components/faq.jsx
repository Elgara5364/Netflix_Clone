"use client";

import Link from "next/link";
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
      <div className="max-w-xl mx-auto mx-6">
        <h2 className="text-white text-3xl font-black text-center">
          Tanya Jawab Umum
        </h2>
        <ul className="mt-8  ">
          {faqList.map((item, index) => (
            <li key={index} className="mb-2">
              <div
                className=" max-w-[1260px] bg-[#2d2d2d] p-6 flex justify-between  cursor-pointer hover:bg-[#444444] duration-200"
                onClick={() => HandleOpen(index)}>
                <button className="text-md font-normal text-white text-start ">
                  {item.title}
                </button>
                <Image src={Plus} alt="Read More" width={25} height={25} />
              </div>
              {indexFaq === index && isOpen && (
                <p className="mt-1 text-white text-md font-normal max-w-[1260px] bg-[#2d2d2d] p-6 ">
                  {item.desc}
                </p>
              )}
            </li>
          ))}
        </ul>
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
