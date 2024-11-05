import FeatImg1 from "../../public/images/features-1.png";
import FeatImg2 from "../../public/images/features-2.png";
import FeatImg3 from "../../public/images/features-3.png";
import FeatImg4 from "../../public/images/features-4.png";

export default function Features() {
  return (
    <section className="pt-32 pb-12 space-y-16">
      <div className="container flex flex-col items-center text-center gap-4">
        <h2 className="homepage-head">FEATURES & FUNCTIONALITIES</h2>
        <h1 className="homepage-title">Our Powerful Features</h1>
        <p className="text-muted text-lg lg:w-2/3">
          Our platform leveraging the Internet Computer Protocol (ICP) to
          revolutionize how AI applications are built, deployed, and scaled. We
          offer a robust ecosystem for developers, researchers, and businesses
          to create decentralized AI solutions with unparalleled data privacy
          and security.
        </p>
      </div>

      <div className="container space-y-12 relative">
        <div className="absolute inset-0 rounded-full opacity-[0.1] blur-[100px] bg-[linear-gradient(115deg,#2010CD_23.07%,#6B1AEA_78.6%)]"></div>
        <div className="relative grid lg:grid-cols-3 gap-8">
          <div className="bg-[linear-gradient(90deg,#985FF1_11%,#3023B9_82.5%)] rounded-t-[40px] pt-1">
            <div className="w-full h-[460px] bg-[linear-gradient(180deg,#12113D_0%,#070232_100%)] rounded-t-[40px]">
              <div className="w-full h-[240px] flex items-center justify-center">
                <img src={FeatImg1} alt="img" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">AI Model Marketplace</h3>
                <p className="text-lg text-muted">
                  Access and distribute pretrained AI models securely on the
                  blockchain.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(90deg,#985FF1_11%,#3023B9_82.5%)] rounded-t-[40px] pt-1">
            <div className="w-full h-[460px] bg-[linear-gradient(180deg,#12113D_0%,#070232_100%)] rounded-t-[40px]">
              <div className="w-full h-[240px] flex items-center justify-center">
                <img src={FeatImg2} alt="img" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">Github Experience</h3>
                <p className="text-lg text-muted">
                  GitHub inspired platform experience for AI modes and solutions
                  where you can find means to meet all AI needs under one roof.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(90deg,#985FF1_11%,#3023B9_82.5%)] rounded-t-[40px] pt-1">
            <div className="w-full h-[460px] bg-[linear-gradient(180deg,#12113D_0%,#070232_100%)] rounded-t-[40px]">
              <div className="w-full h-[240px] flex items-center justify-center">
                <img src={FeatImg3} alt="img" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">
                  Accessibility for All
                </h3>
                <p className="text-lg text-muted">
                  A platform for everything AI ,made to meet the needs of
                  freelancers to executives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[linear-gradient(90deg,#985FF1_11%,#3023B9_82.5%)] rounded-t-[40px] pt-1">
          <div className="flex max-lg:flex-col-reverse max-lg:gap-8 items-center w-full bg-[linear-gradient(180deg,#12113D_0%,#070232_100%)] rounded-t-[40px]">
            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-semibold">
                Create Personalized AI Solutions
              </h3>
              <p className="lg:w-2/3 text-lg text-muted">
                Fully customized and personalized AI tools designed to deliver
                robust and highly scaleable AI solutions
              </p>
            </div>
            <img src={FeatImg4} alt="img" className="max-lg:mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
