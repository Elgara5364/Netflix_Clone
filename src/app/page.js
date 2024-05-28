import Navbar from "./components/navbar";
import Highlight from "./components/highlight";
import WhatYouCanDo1 from "./components/whatYouCanDo1";
import WhatYouCanDo2 from "./components/whatYouCanDo2";
import WhatYouCanDo3 from "./components/whatYouCanDo3";
import WhatYouCanDo4 from "./components/whatYouCanDo4";
import Faq from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Highlight />
      <WhatYouCanDo1 />
      <WhatYouCanDo2 />
      <WhatYouCanDo3 />
      <WhatYouCanDo4 />
      <Faq />
      <Footer />
    </div>
  );
}
