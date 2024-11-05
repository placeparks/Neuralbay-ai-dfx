import React from "react";
import BgImg from "../../public/images/genesis-bg.png";
import ActImg1 from "../../public/images/activity-img-1.png";
import ActImg2 from "../../public/images/activity-img-2.png";
import ActImg3 from "../../public/images/activity-img-3.png";

export default function Genesis() {
  const data = [
    {
      title: (
        <>
          Scale Up Your <span className="homepage-highlight">Business</span>{" "}
          With Pretrained AI Models
        </>
      ),
      des: "Make informed decisions by accessing detailed documentation for each AI model. Dive into the architecture, training data, performance metrics, and implementation guidelines. Gain valuable insights into accuracy, latency, resource requirements, and other vital details to ensure seamless integration into your workflow.",
      img: ActImg1,
    },
    {
      title: (
        <>
          Explore An Extensive{" "}
          <span className="homepage-highlight">Collection</span> Of AI Models
        </>
      ),
      des: "Browse through our vast collection of AI models, carefully curated to cater to various domains, such as computer vision, natural language processing, machine learning, and more. With Neuralbay, finding the ideal model for your specific task, industry, or framework has never been easier",
      img: ActImg2,
    },
    {
      title: (
        <>
          Collaboration And Seek Expert{" "}
          <span className="homepage-highlight">Guidance</span>
        </>
      ),
      des: "Join our thriving community of AI enthusiasts and experts to engage in discussions, seek advice, and collaborate with like-minded individuals. Tap into shared knowledge and collective wisdom to enhance your understanding of AI models and their applications. Neuralbay is more than just a marketplace - it's a vibrant community driving innovation.",
      img: ActImg3,
    },
  ];
  return (
    <section className="relative lg:mt-12">
      <div className="absolute">
        <img
          src={BgImg}
          alt="img"
          width="1440"
          height="959"
          className="w-full max-lg:h-[600px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,0,31,0.57)_0.01%,#01001F_0.02%,rgba(1,0,31,0.43)_9.5%,rgba(1,0,31,0.64)_40%,rgba(1,0,31,0.99)_77.5%,#01001F_100%)]"></div>
      </div>
      <div className="container relative lg:w-2/3 text-center flex flex-col items-center gap-4 pt-72">
        <h5 className="homepage-head">THE GENESIS OF AI</h5>
        <h1 className="homepage-title">
          Unveiling The Platform For Creative{" "}
          <span className="homepage-highlight">AI Innovation</span>
        </h1>
      </div>
      <div className="container relative flex flex-col gap-12 lg:[&>*:nth-child(even)]:flex-row-reverse py-12 mt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
          >
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-[32px] lg:text-5xl max-lg:text-center font-semibold lg:leading-normal">
                {item.title}
              </h1>
              <p className="max-lg:text-center text-muted lg:text-lg">
                {item.des}
              </p>
            </div>
            <img src={item.img} alt="img" width="599" height="463" />
          </div>
        ))}
      </div>
    </section>
  );
}
