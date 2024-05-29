import Image from "next/image";
import Device from "/public/device-pile-id.png";
import tvApple from "/public/video-devices-id.mp4";

const WhatYouCanDo3 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex flex-col justify-center mx-6 max-w-[1180px] h-full">
        <div className="w-full h-1/2 flex flex-col justify-center text-center">
          <h2 className="text-white text-3xl font-black">Tonton di mana pun</h2>
          <p className="text-white mt-4 text-lg font-normal">
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop,
            dan TV-mu.
          </p>
        </div>
        <div className="relative w-full h-1/2 over ">
          <video
            src={tvApple}
            autoPlay
            muted
            loop
            className="w-[62%] absolute left-14 top-6 "
          />
          <Image src={Device} alt="TV" className="absolute " />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo3;
