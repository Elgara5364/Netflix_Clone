import Image from "next/image";
import Mobile from "/public/mobile-0819.jpg";
import BoxShot from "/public/boxshot.png";
import completed from "/public/check-solid.svg";

const WhatYouCanDo2 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex flex-col lg:flex-row-reverse justify-center lg:mx-auto max-w-[1180px] h-full mx-6">
        <div className="w-full h-1/2 flex flex-col justify-center text-center lg:text-start">
          <h2 className="text-white text-3xl font-black">
            Download acara TV untuk menontonnya secara online
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            Simpan Favoritmu dengan mudah agar selalu ada acara TV dan film yang
            bisa ditonton.
          </p>
        </div>
        <div className="relative w-full h-2/4 lg:w-1/2 ">
          <Image src={Mobile} alt="TV" className="absolute" />
          <div className="w-full bg-black border-[1px] border-white rounded-xl px-3 py-2 absolute top-[70%] flex gap-3">
            <Image src={BoxShot} alt="BoxShot" className="h-20 w-auto" />
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-bold text-white">
                Stranger Things
              </h3>
              <p className="text-sm text-blue-500">Berhasil Download.</p>
            </div>
            <div className="w-1/4 flex self-center">
              <Image
                src={completed}
                alt="downloaded"
                width={30}
                className="ms-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo2;
