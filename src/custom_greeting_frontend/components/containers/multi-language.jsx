import BGImg from "../../public/images/multilanguage-lg.png";
import React from "react";

export default function MultiLanguage() {
  return (
    <section className="py-12">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full mt-16">
          <div className="container lg:w-2/3 flex flex-col items-center text-center gap-4">
            <h5 className="homepage-head">MULTILANGUAGE AI MODELS</h5>
            <h1 className="homepage-title">
              We Are Connecting The World Through AI
            </h1>
          </div>
        </div>
        <img src={BGImg} alt="img" width="1239" height="857" className="max-lg:h-[400px] max-lg:object-cover" priority/>
      </div>
    </section>
  );
}
