import { useTranslation } from "../i18n";
import { Images2 } from "./images";

const WhatYouCanDo4 = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");
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
        <Images2 lng={lng} />
      </div>
    </section>
  );
};

export default WhatYouCanDo4;
