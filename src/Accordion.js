// Accordion.js
//bu component (accordion-item) accordion-header: sorular ve toggle-button : cevaplar icin olusacak
// React ve useState hook'unu import ediyoruz.
import React, { useState } from "react";
import "./styles.css";
// FAQ dan gelen proplari iceren( title ve content) according fonksiyonunu tanimlayalim
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  //toggle-butonunu acip kapamak icin useState ile bilesenin durumunu tutup
  //butona tikladigimizda durumu tersine cevirecek fonsiyonu yazalim
  const toggleAccordion = () => {
    setIsOpen(!isOpen); // false ken true olacak
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        {title}
        {/* title prop'uyla gelen başlık */}
        <button className="toggle-button" onClick={toggleAccordion}>
          {/* toggleAccordion fonksiyonunu tetikleyen buton */}
          {isOpen ? "-" : "+"}
          {/* isOpen durumuna göre butonun içeriğini belirliyoruz true ise - false ise+ */}
        </button>
      </div>
      {/* isOpen true ise, içerik gösterilir */}
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p> {/* content prop'uyla gelen içerik */}
        </div>
      )}
    </div>
  );
};

export default Accordion;
