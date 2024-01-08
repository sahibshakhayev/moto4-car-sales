import React from "react";
import "./index.css";
// import svgs
import { ReactComponent as Image1 } from "../../../public/assets/image18.svg";
import { ReactComponent as Image2 } from "../../../publicassets/image19.svg";
import { ReactComponent as Image3 } from "../../../publicassets/image20.svg";
import { ReactComponent as Image4 } from "../../../publicassets/image21.svg";
import { ReactComponent as Image5 } from "../../../publicassets/image22.svg";
import { ReactComponent as Image6 } from "../../../publicassets/image23.svg";
import { ReactComponent as Car } from "../../../public/assets/car.svg";
import Heart from "../../assets/heart.png";
import { ReactComponent as Euro } from "../../assets/euro.svg";
const CardDetails = () => {
  return (
    <div className="cardetail">
      <div className="left">
        <Image1 />
        <Image2 />
        <Image3 />
        <Image4 />
        <Image5 />
        <Image6 />
      </div>
      <div className="center">
        <Car />
        <div className="modelHead">
          <div className="left">
            <span>Toyoto Corolla</span>
            <span>1.0 L, 26.000 km, 2021</span>
          </div>
          <div className="right">
            <div className="priceCard">
              <span>23.000</span>
              <Euro />
            </div>
            <div className="estimateCard">
              <span className="estimate">Təxmini qiyməti 41.780 man</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Özəlliklər</h2>
        <ul>
          <li className="purple">
            <span>Şəhər:</span>
            <span>Sumqayıt</span>
          </li>
          <li>
            <span>Buraxılış ili:</span>
            <span>2021</span>
          </li>
          <li className="purple">
            <span>Vəziyyəti:</span>
            <span>Sürülmüş</span>
          </li>
          <li>
            <span>Ötürücü:</span>
            <span>Ön</span>
          </li>
          <li className="purple">
            <span>Ban növü:</span>
            <span>Sedan</span>
          </li>
          <li>
            <span>Sürətlər qutusu:</span>
            <span>Avtomat</span>
          </li>
          <li className="purple">
            <span>Yürüş:</span>
            <span>26.000 km</span>
          </li>
          <li>
            <span>Rəng:</span>
            <span>Ağ</span>
          </li>
          <li className="purple">
            <span>Yerlərin sayı:</span>
            <span>5</span>
          </li>
          <li>
            <span>Mühərrikin gücü:</span>
            <span>130 a.g.</span>
          </li>
          <li className="purple">
            <span>Mühərrikin həcmi:</span>
            <span>1.0 L</span>
          </li>
        </ul>
        <div className="contact">
          <button className="contactButton">Əlaqə saxla</button>
          <div className="like">
            <img src={Heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
