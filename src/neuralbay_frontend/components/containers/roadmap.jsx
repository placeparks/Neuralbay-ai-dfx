import React from "react";
import RoadmapImg from "../../public/images/roadmap.png";
import RoadmapImgSm from "../../public/images/roadmap-sm.png";
import RoadmapImgSide from "../../public/images/roadmap-side.png";

export default function Roadmap() {
  return (
    <section className="py-24 relative">
      <img
        src={RoadmapImgSide}
        alt="img"
        className="absolute right-0 max-lg:bottom-0 lg:top-0 opacity-[0.35]"
      />
      <div className="container max-lg:space-y-16">
        <div className="lg:hidden flex flex-col items-center lg:items-start gap-4">
          <h5 className="homepage-head">FOR AI ENGINEERS</h5>
          <h1 className="lg:w-1/2 homepage-title">
            Showcase And Monetize Your{" "}
            <span className="homepage-highlight">AI Models</span>
          </h1>
          <p className="lg:w-[40%] max-md:text-center lg:text-lg text-muted">
            Attention, AI engineers! Neuralbay offers a platform to showcase and
            sell your AI models to a global audience.
          </p>
        </div>
        <img src={RoadmapImg} alt="img" className="max-lg:hidden" priority/>
        <img src={RoadmapImgSm} alt="img" className="lg:hidden" priority/>
      </div>
    </section>
  );
}
