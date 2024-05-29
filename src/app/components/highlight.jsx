import Image from "next/image";
import HeroImage from "/public/ID-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import ChevronRight from "/public/bx-chevron-right.svg";
import Link from "next/link";

const Highlight = () => {
  return (
    <section className="relative h-[560px] overflow-hidden">
      <div className="absolute h-[150%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          quality={100}
          style={{ objectFit: "cover" }}
          className="h-full"
        />
      </div>
      <div className="px-6 bg-gradient-to-b from-black/75 from-20% via-transparent/50 to-black/75 to-80% absolute w-full h-[700px]">
        <div className="pb-12 pt-32 my-10 lg:my-32 text-center">
          <h1 className="font-black text-3xl lg:text-5xl text-white  ">
            Film, acara TV tak terbatas, dan banyak lagi
          </h1>
          <p className="text-white font-normal lg:text-2xl mt-4">
            Tonton di mana pun. Batalkan kapanpun.
          </p>

          <div className="mt-6">
            <h3 className="lg:text-lg text-white">
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotaanmu.
            </h3>
            <div className="mt-4 flex flex-col md:flex-row justify-center gap-3 md:gap-2">
              <input
                className="pt-2 pb-2 px-4 bg-transparent w-3/4 md:w-[405px] border-[1px] border-#ffffff9a rounded-md text-white mx-auto md:mx-0 "
                placeholder="Alamat Email"></input>

              <Link
                href={"/#"}
                className="mx-auto md:mx-0 flex px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 ease-out rounded-md ">
                <button className="text-white font-medium text-lg ">
                  Mulai
                </button>
                <Image src={ChevronRight} alt="continue" width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
