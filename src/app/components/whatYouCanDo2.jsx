import Image from "next/image";
import Mobile from "/public/mobile-0819.jpg";
import BoxShot from "/public/boxshot.png";
import completed from "/public/download-icon.gif";

const WhatYouCanDo2 = ({ t }) => {
  return (
    <section className=" h-auto py-14 bg-black mt-2">
      <div className="max-w-xl flex flex-col lg:flex-row-reverse justify-center h-auto mx-6 md:mx-8 lg:mx-8 xl:mx-auto">
        <div className="max-w-xl  lg:mx-8  lg:w-1/2 h-1/2 flex flex-col justify-center lg:self-center text-center lg:text-start">
          <h2 className="text-white text-3xl lg:text-[44px] font-black">
            {t("WhatYCD2.heading")}
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            {t("WhatYCD2.desc")}
          </p>
        </div>
        <div className="relative h-1/2 lg:w-1/2  ">
          <Image
            src={Mobile}
            alt="Mobile Phone"
            width={640}
            height={480}
            className="mx-auto"
          />
          <div className="w-[55%] max-sm:w-[100px] h-auto min-w-[14rem] absolute bottom-[8%] min-xl:w-[50%] max-[444px]:w-[80%] max-[444px]:mx-8 min-[445px]:left-[22%] mx-auto x flex justify-between bg-black border-[1px] border-white rounded-xl py-1 px-2.5">
            <div className=" h-auto flex gap-3">
              <Image
                src={BoxShot}
                width={100}
                alt="BoxShot"
                className="w-[50px] h-[65px] md:w-[60px] md:h-[80px]"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xs font-bold min-[312px]:text-sm md:text-base text-white">
                  Stranger Things
                </h3>
                <p className="text-[10px] min-[312px]:text-xs md:text-sm text-blue-500">
                  Berhasil Download.
                </p>
              </div>
            </div>
            <div className="flex self-center pe-2 sm:pe-0">
              <Image src={completed} alt="downloaded" width={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo2;
