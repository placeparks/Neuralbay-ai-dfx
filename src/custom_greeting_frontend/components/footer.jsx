import FooterImg from "../public/images/Footer-Section.png";
import FooterImgSm from "../public/images/Footer-Section-Sm.png";

export default function Footer() {
  return (
    <div>
      <img src={FooterImg} alt="img" className="max-lg:hidden" priority/>
      <img src={FooterImgSm} alt="img" className="lg:hidden" priority/>
    </div>
  );
}
