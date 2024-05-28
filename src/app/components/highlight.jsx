import Image from "next/image";
import HeroImage from "/public/ID-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import ChevronRight from "/public/bx-chevron-right.svg";

const Highlight = () => {
  return (
    <div className="h-[700px]">
      <div className="absolute h-[700px]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          quality={100}
          style={{ objectFit: "cover" }}
          className="h-full"
        />
      </div>
      <div className="bg-gradient-to-b from-black/75 from-20% via-transparent/50 to-black/75 to-80% absolute w-full h-[700px]">
        <div className="pb-16 pt-28 my-32 text-center">
          <h1 className="font-black text-5xl text-white  ">
            Film, acara TV tak terbatas, dan banyak lagi
          </h1>
          <p className="text-white font-normal xl:text-2xl mt-4">
            Tonton di mana pun. Batalkan kapanpun.
          </p>

          <div className="mt-6">
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
      </div>
    </div>
  );
};

export default Highlight;
