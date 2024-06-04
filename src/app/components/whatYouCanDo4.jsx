import Image from "next/image";
import Anak from "/public/AAAABf4UTxdT7-yQGKCx5ZsSb1gyb53QvZBw0LX4fbqqRjQwgx2KQ8cBtWOTKSd_BLBb7tuOB07RMEDs5bQFYhCDI4zDk6sD8J5Pjo1f.png";

const WhatYouCanDo4 = ({ t }) => {
  return (
    <section className=" h-auto py-[72px] bg-black mt-2">
      <div className="max-w-xl flex flex-col lg:flex-row-reverse justify-center mx-6 md:mx-8 xl:mx-auto h-full">
        <div className=" lg:mx-8  h-1/2 flex flex-col justify-center  lg:self-center text-center lg:text-start">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            {t("WhatYCD4.heading")}
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            {t("WhatYCD4.desc")}
          </p>
        </div>
        <div className=" w-full h-1/2 ">
          <Image src={Anak} alt="TV" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo4;
