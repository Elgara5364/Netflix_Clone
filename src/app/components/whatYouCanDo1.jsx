import { useTranslation } from "../i18n";
import { Video1 } from "./video";

const WhatYouCanDo1 = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <section className="py-14 bg-black mt-2 h-auto">
      <div className="max-w-xl  h-auto flex flex-col lg:flex-row justify-center mx-6 md:mx-8 lg:mx-8 xl:mx-auto overflow-hidden ">
        <div className="max-w-xl h-1/2 flex flex-col justify-center self-center  lg:mx-8 max-lg:w-full max-lg:text-center">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            {t("WhatYCD1.heading")}
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            {t("WhatYCD1.desc")}
          </p>
        </div>
        <Video1 />
      </div>
    </section>
  );
};

export default WhatYouCanDo1;
