import Accordion, { AccordionItem } from "./Accordion";
import { faqListId, faqListEn } from "../lib/faqList";

const ListLanguageValidation = (localActive) => {
  const { language } = localActive;
  console.log(language);
  if (language === "id") {
    return (
      <div className="mt-3">
        {faqListId.map((item, index) => (
          <Accordion key={index}>
            <AccordionItem
              className="h-full"
              value={index}
              trigger={item.title}>
              {item.desc}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  } else {
    return (
      <div className="mt-3">
        {faqListEn.map((item, index) => (
          <Accordion key={index}>
            <AccordionItem
              className="h-full"
              value={index}
              trigger={item.title}>
              {item.desc}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  }
};

export default ListLanguageValidation;
