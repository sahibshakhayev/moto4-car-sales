import React from "react";
import AnnuoncementsCard from "../OtherAnnouncementsCard";
import "./index.css";
const OtherAnnouncements = () => {
  return (
    <div className="other">
      <div className="head">
        <span>Digər Elanlar</span>
      </div>
      <div className="bottom">
        <AnnuoncementsCard />
        <AnnuoncementsCard />
        <AnnuoncementsCard />
        <AnnuoncementsCard />
      </div>
    </div>
  );
};

export default OtherAnnouncements;
