import Image from "next/image";
import Mobile from "/public/mobile-0819.jpg";
import BoxShot from "/public/boxshot.png";
import completed from "/public/check-solid.svg";

const WhatYouCanDo2 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex flex-row-reverse justify-center mx-auto max-w-[1180px] h-full">
        <div className="w-1/2 flex flex-col justify-center text-start">
          <h2 className="text-white text-5xl font-black">Nikmati di TV-mu</h2>
          <p className="text-white mt-4 text-2xl font-normal">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi.
          </p>
        </div>
        <div className="relative w-1/2 ">
          <Image src={Mobile} alt="TV" className="absolute" />
          <div className=" bg-black border-[1px] border-white rounded-xl w-[348px] max-h-[103px] px-3 py-2 absolute bottom-20 left-[120px] flex gap-3">
            <Image src={BoxShot} alt="BoxShot" className="h-20 w-auto" />
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-bold text-white">
                Stranger Things
              </h3>
              <p className="text-sm text-blue-500">Berhasil Download.</p>
            </div>
            <Image
              src={completed}
              alt="downloaded"
              width={30}
              className="ms-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo2;
