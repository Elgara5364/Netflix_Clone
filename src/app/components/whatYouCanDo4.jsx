import Image from "next/image";
import Anak from "/public/AAAABf4UTxdT7-yQGKCx5ZsSb1gyb53QvZBw0LX4fbqqRjQwgx2KQ8cBtWOTKSd_BLBb7tuOB07RMEDs5bQFYhCDI4zDk6sD8J5Pjo1f.png";

const WhatYouCanDo4 = () => {
  return (
    <section className="h-[570px] py-[72px] bg-black mt-2">
      <div className="flex flex-row-reverse justify-center mx-auto max-w-[1180px] h-full">
        <div className="w-1/2 flex flex-col justify-center text-start">
          <h2 className="text-white text-5xl font-black">
            Buat profil untuk anak
          </h2>
          <p className="text-white mt-4 text-2xl font-normal">
            Kirim anak-anak untuk bertualang bersama karakter favorit mereka di
            dunia yang dibuat khusus untuk mereka - gratis dengan keanggotaanmu.
          </p>
        </div>
        <div className="relative w-1/2 ">
          <Image src={Anak} alt="TV" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo4;
