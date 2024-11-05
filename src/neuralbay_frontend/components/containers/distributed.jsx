import DSImg from "../../public/images/potential-ds.png";
import Img from "../../public/images/distributed-img.png";

export default function Distributed() {
  return (
    <section className="py-12 lg:py-24 space-y-16">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h5 className="homepage-head">UNLOCKING THE POTENTIAL</h5>
          <h1 className="lg:w-2/3 homepage-title">
            Harnessing{" "}
            <span className="homepage-highlight">Distributed Computing</span>{" "}
            Power
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-lg:gap-12">
          <div className="lg:w-1/2">
            <p className="lg:text-lg text-muted">
              In today&apos;s digital age, the power of distributed computing is
              revolutionizing industries and driving innovation forward at an
              unprecedented pace. Through collaborative networks of
              interconnected devices, we are tapping into vast reserves of
              computational power, enabling groundbreaking research, powering
              sophisticated algorithms, and fueling the advancement of
              artificial intelligence. Join us as we delve into the
              transformative potential of distributed computing, where
              collective strength amplifies individual capabilities, propelling
              us towards a future limited only by our imagination.
            </p>
          </div>
          <img src={Img} alt="img" />
        </div>
      </div>
      <div className="container max-lg:hidden">
        <img src={DSImg} alt="img" className="w-full" />
      </div>
    </section>
  );
}
