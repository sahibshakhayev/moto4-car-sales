import { FunctionComponent} from "react";
import "./footer.css";
const Footer: FunctionComponent = () => {
  return (
    <>
    <div className="footer-con">

  <div className="part1">
  <img src="/assets/img/logo.svg" alt="logo"/>
  <span>MOTO4 qlobal B2B2C layihəsidir və əsas diqqəti avtomobil qiymətlərinin proqnozlaşdırılması sisteminin inkişafına yönəldir. </span>
   <div className="social">
   <img src="/assets/icons/instagram.svg" alt="social" />
   <img src="/assets/icons/x.svg" alt="social" />
   <img src="/assets/icons/facebook.svg" alt="social" />
   <img src="/assets/icons/youtube.svg" alt="social" />


   </div>

  </div>
   <div className="part2"></div>
    <div className="help">
     <div className="head">Kömək</div>
     <div className="types">
     <div className="link">FAQs</div>
     <div className="link">Haqqımızda</div>
     <div className="link">Əlaqə</div>
     </div>
    </div>
    <div className="company">
    <div className="head">Şirkət</div>
    <div className="types">
    <div className="link">Brendlər</div>
    <div className="link">Bizim hekayəmiz</div>
    <div className="link">Prediction</div>
    </div>

    </div>
    </div>
    </>
  );
};

export default Footer;
