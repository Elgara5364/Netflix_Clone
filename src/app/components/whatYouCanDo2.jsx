import { useTranslation } from "../i18n";
import { Images1 } from "./images";

const WhatYouCanDo2 = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <section className=" h-auto py-14 bg-black mt-2">
      <div className="max-w-xl flex flex-col lg:flex-row-reverse justify-center h-auto mx-6 md:mx-8 lg:mx-8 xl:mx-auto">
        <div className="max-w-xl mx-10 lg:mx-8 lg:w-1/2 h-1/2 flex flex-col justify-center lg:self-center text-center lg:text-start">
          <h2 className="text-white text-3xl leading-tight lg:text-[44px] font-black">
            {t("WhatYCD2.heading")}
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            {t("WhatYCD2.desc")}
          </p>
        </div>
        <Images1 />
      </div>
    </section>
  );
};

export default WhatYouCanDo2;
