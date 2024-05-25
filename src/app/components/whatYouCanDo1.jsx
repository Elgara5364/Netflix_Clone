import Image from "next/image";
import tvImage from "/public/tv.png";
// import tvImageMask from "/public/tv-mask.png";
import videoTv from "/public/video-tv-0819.mp4";

const WhatYouCanDo1 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex justify-center mx-auto max-w-[1180px] h-full">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-white text-5xl font-black">Nikmati di TV-mu</h2>
          <p className="text-white mt-4 text-2xl font-normal">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi.
          </p>
        </div>
        <div className="relative w-1/2">
          <video
            src={videoTv}
            autoPlay
            muted
            loop
            className="absolute top-[85px] left-[80px] w-[425px] h-[260px] "
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
