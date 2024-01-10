import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import styles from  "./navbar.module.css";
import "../../../src/global.css";




const Navbar:FunctionComponent = () => {
  
    return (
        <div className={styles.navbar}>
        <div className={styles["logo-con"]}>
          <img className="logo" alt="" src="/assets/img/image-4@2x.png" />
        </div>
        <div className={styles["page-links"]}>
          <div className={styles["page-names"]}>
            <div className={styles["pagename-con"]}>
            <Link to={"/all"}><div className={styles["text-2"]}>Hamısı</div></Link>
            </div>
            <div className={styles["pagename-con"]}>
              <Link to={"/services"}><div className={styles["text-2"]}>Xidmətlər</div></Link>
            </div>
            <div className={styles["pagename-con"]}>
            <Link to={"/about"}><div className={styles["text-2"]}>Haqqımızda</div></Link>
            </div>
            <div className={styles["pagename-con"]}>
            <Link to={"/faq"}><div className={styles["text-2"]}>FAQ</div></Link>
            </div>
          </div>
          <div className={styles["user-pages"]}>
           <Link to={"/user"}><img className={styles.icon} alt="" src="/assets/icons/iconuser.svg" /></Link>
            <Link to={"/liked"}><img className={styles.icon} alt="" src="/assets/icons/iconheart.svg" /></Link>
            <div className={styles.langs}>
              <div className={styles.lang}>AZ</div>
            </div>
          </div>
          <div className={styles["nav-adv"]}>
            <Link to={"https://motofour.streamlit.app/"}>
            <div className={styles["pred-adv"]}>
              <img className={styles.icon} alt="" src="/assets/icons/iconplus.svg" />
              <b className={styles["text-3"]}>Proqnozlu Elan</b>
            </div>
            </Link>
            <Link to={"/add-adv"}>
            <div className={styles["add-adv"]}>
              <b>Elan Yerləşdir</b>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;






