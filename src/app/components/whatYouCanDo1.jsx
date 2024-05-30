import Image from "next/image";
import tvImage from "/public/tv.png";
// import tvImageMask from "/public/tv-mask.png";
import videoTv from "/public/video-tv-0819.mp4";

const WhatYouCanDo1 = () => {
  return (
    <section className="py-14 bg-black mt-2 h-auto">
      <div className="max-w-xl  h-auto flex flex-col lg:flex-row justify-center mx-6 md:mx-8 lg:mx-8 xl:mx-auto overflow-hidden ">
        <div className="max-w-xl h-1/2 flex flex-col justify-center self-center mx-6 lg:mx-8 max-lg:w-full max-lg:text-center">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            Nikmati di TV-mu
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi.
          </p>
        </div>
        <div className="relative h-1/2 overflow-hidden mx-auto lg:mx-6">
          <Image src={tvImage} alt="TV" width={640} className="relative z-10" />
          <div className="absolute max-w-[73%] top-[20%] left-[13%]">
            <video src={videoTv} autoPlay muted loop width={640} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo1;
