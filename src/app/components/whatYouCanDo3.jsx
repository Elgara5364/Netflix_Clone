import { useTranslation } from "../i18n";

import { Video2 } from "./video";

const WhatYouCanDo3 = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");
  return (
    <section className="h-auto py-[72px] bg-black mt-2">
      <div className="max-w-xl  flex flex-col lg:flex-row justify-center mx-6 md:mx-8 lg:mx-8 xl:mx-auto h-full">
        <div className="w-full lg:mx-8  xl:w-1/2 h-1/2 flex flex-col justify-center lg:self-center text-center lg:text-start">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            {t("WhatYCD3.heading")}
          </h2>
          <p className="text-white mt-4 text-lg font-normal">
            {t("WhatYCD3.desc")}
          </p>
        </div>
        <Video2 />
      </div>
    </section>
  );
};

export default WhatYouCanDo3;
