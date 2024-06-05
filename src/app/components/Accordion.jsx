"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Plus from "/public/plus-solid.svg";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    // onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;
  const ref = useRef();

  // ;
  return (
    <li {...props} className="text-md font-normal text-white text-start mb-2 ">
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className=" max-w-[1260px] bg-[#2d2d2d] lg:text-2xl p-6 flex justify-between  cursor-pointer hover:bg-[#444444] duration-200 text-white ">
        {trigger}
        <Image
          src={Plus}
          alt="more"
          width={25}
          className={`transition duration-300 ${
            open ? "transition duration-200 transform rotate-45" : null
          }`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all "
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className=" p-6 bg-[#2d2d2d] mt-1 lg:text-2xl " ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
