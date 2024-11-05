import RightImg from "../../public/images/unleasing-img.png";
import { Button } from "../ui/button";

export default function Unleashing() {
  return (
    <section className="relative flex flex-col lg:flex-row items-end lg:items-center justify-end max-md:gap-4 py-12 lg:mt-20">
      <div className="relative lg:absolute w-full">
        <div className="container flex flex-col items-center lg:items-start gap-4">
          <h5 className="homepage-head">UNLEASHING THE IMPLICIT OF</h5>
          <h1 className="lg:w-1/2 homepage-title">
            AI Through The Power Of{" "}
            <span className="homepage-highlight">NFTs</span>.
          </h1>
          <p className="lg:w-[40%] max-md:text-center lg:text-lg text-muted">
            As Non-Fungible Tokens (NFTs) revolutionize digital ownership, they
            serve as catalysts for AI&apos;s evolution. By imbuing AI with
            unique digital assets, NFTs empower artificial intelligence to
            explore new frontiers of creativity, innovation, and value creation.
          </p>
          <Button>Explore more</Button>
        </div>
      </div>
      <img
        src={RightImg}
        alt="img"
        property="true"
        className="max-md:w-[80%] max-md:mt-14"
        priority
      />
    </section>
  );
}
