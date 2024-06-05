import videoTv from "/public/video-tv-0819.mp4";
import Image from "next/image";
import tvImage from "/public/tv.png";
import Device from "/public/device-pile-id.png";
import tvApple from "/public//video-tv-0819.mp4";

export function Video1() {
  return (
    <div className="relative h-1/2 overflow-hidden mx-auto lg:mx-6">
      <Image src={tvImage} alt="TV" width={640} className="relative z-10" />
      <div className="absolute max-w-[73%] top-[20%] left-[13%]">
        <video src={videoTv} autoPlay muted loop width={640} />
      </div>
    </div>
  );
}

export function Video2() {
  return (
    <div className="relative overflow-hidden h-1/2 mx-auto">
      <Image src={Device} alt="TV" width={640} className="relative z-10" />
      <div className=" max-w-[61%] absolute top-[10%] left-[19%] ">
        <video src={tvApple} autoPlay muted loop width={640} />
      </div>
    </div>
  );
}
