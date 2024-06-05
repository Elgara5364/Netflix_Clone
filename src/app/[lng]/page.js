import Navbar from "../components/navbar";
import { dir } from "i18next";
import Highlight from "../components/highlight";
import WhatYouCanDo1 from "../components/whatYouCanDo1";
import WhatYouCanDo2 from "../components/whatYouCanDo2";
import WhatYouCanDo3 from "../components/whatYouCanDo3";
import WhatYouCanDo4 from "../components/whatYouCanDo4";
import Faq from "../components/faq";
import Footer from "../components/footer";

export default function Home({ params: { lng } }) {
  return (
    <div className="bg-[#262626]" lang={lng} dir={dir(lng)}>
      <Navbar lng={lng} />
      <Highlight lng={lng} />
      <WhatYouCanDo1 lng={lng} />
      <WhatYouCanDo2 lng={lng} />
      <WhatYouCanDo3 lng={lng} />
      <WhatYouCanDo4 lng={lng} />
      <Faq lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
