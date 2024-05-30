import Image from "next/image";
import Device from "/public/device-pile-id.png";
import tvApple from "/public/video-devices-id.mp4";

const WhatYouCanDo3 = () => {
  return (
    <section className="h-auto py-[72px] bg-black mt-2">
      <div className="max-w-xl  flex flex-col lg:flex-row justify-center mx-6 lg:mx-8 xl:mx-auto h-full">
        <div className="w-full xl:w-1/2 h-1/2 flex flex-col justify-center lg:self-center text-center lg:text-start">
          <h2 className="text-white text-3xl font-black">Tonton di mana pun</h2>
          <p className="text-white mt-4 text-lg font-normal">
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop,
            dan TV-mu.
          </p>
        </div>
        <div className="relative overflow-hidden h-1/2 mx-auto">
          <Image src={Device} alt="TV" width={640} className="relative z-10" />
          <div className=" max-w-[61%] absolute top-[10%] left-[19%] ">
            <video src={tvApple} autoPlay muted loop width={640} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo3;
