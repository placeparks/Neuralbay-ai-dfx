import Img1 from "../../public/images/unlocking-img-1.png";
import Img2 from "../../public/images/unlocking-img-2.png";
import Img3 from "../../public/images/unlocking-img-3.png";
import BGImg from "../../public/images/unlocking-bg.png";
import BGImgSm from "../../public/images/unlocking-bg-sm.png";

export default function Unlocking() {
  const data = [
    {
      img: Img1,
      title: "Create your unbiased AI",
    },
    {
      img: Img2,
      title: "Reduced bias with blockchain",
    },
    {
      img: Img3,
      title: "Explore usecases",
    },
  ];
  return (
    <section className="relative pt-12 lg:pt-28 pb-12 lg:pb-48">
      <div className="container space-y-12 lg:space-y-24">
        <div className="flex flex-col items-center text-center gap-4">
          <h5 className="homepage-head">UNLOCKING THE HUMAN SPARK</h5>
          <h1 className="lg:w-[60%] homepage-title">
            Empowering The Frontiers Of{" "}
            <span className="homepage-highlight">AI Creativity</span>
          </h1>
          <p className="text-muted lg:text-lg">
            Diving into the realms where the human spark ignites AI creativity.
          </p>
        </div>

        <div className="lg:w-[45%] grid max-lg:grid-cols-2 gap-5 lg:gap-16">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(90deg,#985FF1_11%,#3023B9_82.5%)] p-[1px] rounded-[40px]"
            >
              <div className="bg-[linear-gradient(180deg,#12113D_21%,#070232_100%)] flex flex-col lg:flex-row items-center gap-8 p-4 lg:p-12 rounded-[40px]">
                <img src={item.img} alt="img" width="54" height="54" />
                <h1 className="lg:text-2xl max-lg:text-center font-semibold">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={BGImg}
        alt="img"
        className="max-lg:hidden absolute bottom-0 right-0"
        priority
      />
      <img
        src={BGImgSm}
        alt="img"
        className="lg:hidden absolute bottom-0 right-0"
      />
    </section>
  );
}
