import ActImg1 from "../../public/images/activity-img-1.png";
import ActImg2 from "../../public/images/activity-img-2.png";
import ActImg3 from "../../public/images/activity-img-3.png";

export default function Activities() {
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
      des: "Make informed decisions by accessing detailed documentation for each AI model. Dive into the architecture, training data, performance metrics, and implementation guidelines. Gain valuable insights into accuracy, latency, resource requirements, and other vital details to ensure seamless integration into your workflow.",
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
    <section className="container flex flex-col gap-12 lg:[&>*:nth-child(even)]:flex-row-reverse py-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[32px] lg:text-5xl max-lg:text-center font-semibold lg:leading-normal">
              {item.title}
            </h1>
            <p className="max-lg:text-center text-muted lg:text-lg">{item.des}</p>
          </div>
          <img src={item.img} alt="img" width="599" height="463" />
        </div>
      ))}
    </section>
  );
}
