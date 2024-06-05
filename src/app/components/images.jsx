import Image from "next/image";
import Mobile from "/public/mobile-0819.jpg";
import BoxShot from "/public/boxshot.png";
import completed from "/public/download-icon.gif";
import Anak from "/public/AAAABf4UTxdT7-yQGKCx5ZsSb1gyb53QvZBw0LX4fbqqRjQwgx2KQ8cBtWOTKSd_BLBb7tuOB07RMEDs5bQFYhCDI4zDk6sD8J5Pjo1f.png";
import Kids from "/public/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";

export function Images1() {
  return (
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
  );
}

export function Images2({ lng }) {
  return (
    <div className=" w-full h-1/2 ">
      {lng === "id" ? (
        <Image src={Anak} alt="TV" className="mx-auto" />
      ) : (
        <Image src={Kids} alt="TV" className="mx-auto" />
      )}
    </div>
  );
}
