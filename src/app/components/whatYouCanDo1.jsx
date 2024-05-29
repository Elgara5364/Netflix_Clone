import Image from "next/image";
import tvImage from "/public/tv.png";
// import tvImageMask from "/public/tv-mask.png";
import videoTv from "/public/video-tv-0819.mp4";

const WhatYouCanDo1 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2 ">
      <div className="relative flex flex-col justify-center h-full ">
        <div className="w-1/2 h-1/2 px-6 flex flex-col justify-center max-[959px]:mx-auto max-[959px]:w-full max-[959px]:text-center">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            Nikmati di TV-mu
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi.
          </p>
        </div>
        <div className="relative w-1/2 h-3/4 overflow-hidden sm:w-full mx-auto">
          <video
            src={videoTv}
            autoPlay
            muted
            loop
            className="absolute top-[17%] left-[13%] w-[80%] lg:w-[440px] lg:h-[260px]"
          />
          <Image src={tvImage} alt="TV" className="absolute" />

          {/* <Image
            src={tvImageMaskW}
            alt="TV Mask"
            style={{ position: "absolute" }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo1;
