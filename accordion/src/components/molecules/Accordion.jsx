// Komponen utama: Accordion (Tirai Besar)
import AccordionItem from "../atoms/AccordionItem";
import { useState } from "react";

function Accordion({ faqs }) {
  // useState adalah "pengingat" yang mencatat item mana yang sedang terbuka.
  // Awalnya, tidak ada yang terbuka, jadi nilainya null.
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {/* Memetakan (mapping) setiap item FAQ menjadi satu AccordionItem (satu tirai kecil) */}
      {faqs.map((faq, index) => (
        <AccordionItem
          {...faq}
          // Mengirimkan "pengingat" isOpen ke setiap item.
          getOpen={isOpen}
          // Mengirimkan "tombol" untuk mengubah status isOpen.
          setOpen={setIsOpen}
          // Menetapkan nomor unik untuk setiap item (tirai).
          number={index + 1}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
