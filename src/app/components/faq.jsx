import Image from "next/image";
import Close from "/public/xmark-solid.svg";
import Plus from "/public/plus-solid.svg";
import { faqList } from "../lib/faqList";

const Faq = () => {
  // console.log(faqList);
  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-[1260px] mx-auto">
        <h2 className="text-white text-5xl font-black text-center">
          Tanya Jawab Umum
        </h2>
        <div className="mt-8">
          {faqList.map((item, index) => (
            <div
              className=" max-w-[1260px] bg-[#2d2d2d] p-6 flex justify-between mb-2"
              key={index}>
              <button className="text-2xl font-normal text-white">
                {item.title}
              </button>
              <Image src={Plus} alt="Read More" width={36} height={36} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
