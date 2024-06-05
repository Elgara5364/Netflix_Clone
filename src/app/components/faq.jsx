import { Button2 } from "./button";
import { useTranslation } from "../i18n";
import Accordion, { AccordionItem } from "./Accordion";

const Faq = async ({ lng }) => {
  const { t } = await useTranslation(lng, "landing-page");

  return (
    <section className="h-full py-[72px]  bg-black mt-2 ">
      <div className="max-w-xl mx-6 xl:mx-auto">
        <h2 className="text-white text-3xl lg:text-5xl  font-black text-center mb-8">
          {t("faq.heading")}
        </h2>
        <div></div>
        <div className="mt-11 text-center">
          <div className="mt-3">
            {t("faq.list", { returnObjects: true }).map((item, index) => (
              <Accordion key={index}>
                <AccordionItem
                  className="h-full"
                  value={index}
                  trigger={item.faq}>
                  {item.ans}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <h3 className="text-lg px-5 text-white mt-8">
            {t("highlight.subheading")}
          </h3>
          <Button2 lng={lng} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
