import Image from "next/image";
import Device from "/public/device-pile-id.png";
import tvApple from "/public/video-devices-id.mp4";

const WhatYouCanDo3 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex  justify-center mx-auto max-w-[1180px] h-full">
        <div className="w-1/2 flex flex-col justify-center text-start">
          <h2 className="text-white text-5xl font-black">Tonton di mana pun</h2>
          <p className="text-white mt-4 text-2xl font-normal">
            Streaming film dan acara TV tak terbatas di ponsel, tablet, ;aptop,
            dan TV-mu.
          </p>
        </div>
        <div className="relative w-1/2 ">
          <video
            src={tvApple}
            autoPlay
            muted
            loop
            className="absolute top-[35px] left-[117px] w-[350px] h-[227px]"
          />
          <Image src={Device} alt="TV" className="absolute" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo3;
