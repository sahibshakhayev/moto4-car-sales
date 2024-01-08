import React from "react";
import "./index.css";
import OtherCar from "../../assets/otherCar.png";
import HeartIcon from "../../assets/hearticon.png";
const AnnuoncementsCard = () => {
  return (
    <div className="otherCarContainer">
      {/* <img src={HeartIcon} alt="" /> */}
      <div className="img">
        <img src={OtherCar} alt="carImage" />
      </div>
      <div className="desc">
        <span className="modelName">BMW M8</span>
        <div className="features">
          <span className="prop">2.0L</span>,
          <span className="kilometrage">12.000 km</span>,
          <span className="modelYear">2023</span>
        </div>
      </div>
      <div className="price">
        <span>Qiymət: </span>
        <span className="">
          95.000{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.1539 7.154C15.2049 6.205 13.5349 5.546 11.9999 5.504M11.9999 5.504C10.1739 5.455 8.53895 6.282 8.53895 8.538C8.53895 12.692 16.1539 10.615 16.1539 14.769C16.1539 17.139 14.1269 18.157 11.9999 18.08M11.9999 5.504V3M7.84595 16.154C8.73895 17.344 10.3979 18.022 11.9999 18.08M11.9999 18.08V21"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default AnnuoncementsCard;
