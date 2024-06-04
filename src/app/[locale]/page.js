import Navbar from "../components/navbar";
import Highlight from "../components/highlight";
import WhatYouCanDo1 from "../components/whatYouCanDo1";
import WhatYouCanDo2 from "../components/whatYouCanDo2";
import WhatYouCanDo3 from "../components/whatYouCanDo3";
import WhatYouCanDo4 from "../components/whatYouCanDo4";
import Faq from "../components/faq";
import Footer from "../components/footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="relative">
      <Navbar t={t} />
      <Highlight t={t} />
      <WhatYouCanDo1 t={t} />
      <WhatYouCanDo2 t={t} />
      <WhatYouCanDo3 t={t} />
      <WhatYouCanDo4 t={t} />
      <Faq t={t} />
      <Footer t={t} />
    </div>
  );
}
