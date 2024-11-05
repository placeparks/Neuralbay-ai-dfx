import React from "react";

import CardImg1 from "../../public/images/Layer_1.png";
import CardImg2 from "../../public/images/Layer_2.png";
import CardImg3 from "../../public/images/Layer_3.png";
import CardImg4 from "../../public/images/Layer_4.png";
import CardImg5 from "../../public/images/Layer_5.png";
import CardImg6 from "../../public/images/Layer_6.png";
import GlobeImg from "../../public/images/discover-Globe.png";
import { MoveRight } from "lucide-react";

export default function Discover() {
  const cardData = [
    {
      imageSrc: CardImg1,
      title: "Audio Creation",
      description:
        "Transform sound with AI-powered audio creation—generate, mix, and master with lifelike precision for limitless possibilities.",
    },
    {
      imageSrc: CardImg2,
      title: "Image Generation",
      description:
        "AI models that transform text into vivid, imaginative images, blending creativity and technology to generate stunning visual content from simple descriptions.",
    },
    {
      imageSrc: CardImg3,
      title: "Translation",
      description:
        "Translations AI models: Effortlessly convert text between languages with high accuracy, ensuring clear communication across global audiences.",
    },
    {
      imageSrc: CardImg4,
      title: "Object Detection",
      description:
        "Object Detection AI models identify and classify objects within images or videos, enabling real-time recognition and analysis for various applications.",
    },
    {
      imageSrc: CardImg5,
      title: "Text Generation",
      description:
        "Text Generation AI models craft human-like text, automate writing tasks, and enhance creativity through natural language understanding and contextual learning.",
    },
    {
      imageSrc: CardImg6,
      title: "Finance",
      description:
        "Create AI-powered trading strategies and risk assessment models with transparent, tamper-proof execution on the blockchain.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-24">
      <img src={GlobeImg} alt="img" className="absolute bottom-0 right-0" />
      <div className="relative container space-y-12">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h5 className="homepage-head">Discover & Explore</h5>
          <h1 className="lg:w-2/3 homepage-title">
            Discover An Extensive Range Of{" "}
            <span className="homepage-highlight">AI Models</span> To Explore
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((item, index) => (
            <div key={index} className="bg-[#080728] p-6 space-y-3 card">
              <div className="flex items-center justify-between mb-14">
                <img src={item.imageSrc} alt="img" />
                <MoveRight className="text-[#4C57CF]" />
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
