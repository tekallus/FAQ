// FAQ.js(siklikla sorulan sorular componenti)
//bu componentin altinda <h2>baslik ve faqdata da 3 tane nese oldugu icin 3 according-item componenti olacak
import React from "react";
import Accordion from "./Accordion.js";

const FAQ = () => {
  // Sıkça sorulan sorular için bir veri oluşturalım
  const faqData = [
    {
      id: 1,
      title: "Ürün Kaliteli mi?",
      content: "Ürünlerimiz yüksek kalite standartlarına sahiptir."
    },
    {
      id: 2,
      title: "Fiyatı Ne Kadar?",
      content: "Ürün fiyatları ürün tipine göre değişiklik göstermektedir."
    },
    {
      id: 3,
      title: "Ne Zaman Ulaşır?",
      content:
        "Teslimat süreleri siparişinizi verdiğiniz konuma ve kargo şirketine bağlı olarak değişiklik gösterir."
    }
    // Diğer sorular ve cevapları buraya ekleyebilirsiniz
  ];
  //according compenentini import edip
  //yukarida tanimli nesneleri herbirine islem yapmak icin map kullanrak
  //tanimli proplari according componentine iletelim
  return (
    <div className="faq-container">
      <h2 style={{ color: "white" }}>Sıkça Sorulan Sorular</h2>
      {faqData.map((faq) => (
        <Accordion key={faq.id} title={faq.title} content={faq.content} /> //ihitiyac duyulan proplari tanimlayalim
      ))}
    </div>
  );
};

export default FAQ;
