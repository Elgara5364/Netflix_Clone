"use client";

import Image from "next/image";
import tvImage from "/public/tv.png";
import Device from "/public/device-pile-id.png";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export function Video1() {
  return (
    <div className="relative h-1/2 overflow-hidden mx-auto lg:mx-6">
      <Image src={tvImage} alt="TV" width={640} className="relative z-10" />
      <div className="absolute max-w-[73%] w-full h-auto top-[20%] left-[13%]">
        <CldVideoPlayer
          className="w-full"
          publicId="netflix-clone/landing-page/qs4znpcuevcvxv0yp3e6"
          width="480"
          height="270"
          src="netflix-clone/landing-page/qs4znpcuevcvxv0yp3e6"
          controls={false}
          muted
          autoplay="true"
          loop
        />
      </div>
    </div>
  );
}

export function Video2() {
  return (
    <div className="relative overflow-hidden h-1/2 mx-auto">
      <Image src={Device} alt="TV" width={640} className="relative z-10" />
      <div className=" max-w-[61%] w-full absolute top-[10%] left-[19%] ">
        <CldVideoPlayer
          className="w-full"
          publicId="netflix-clone/landing-page/yvksrafcd1aqji7pb4jy"
          width="480"
          height="270"
          src="netflix-clone/landing-page/yvksrafcd1aqji7pb4jy"
          controls={false}
          muted
          autoplay="true"
          loop
        />
      </div>
    </div>
  );
}
