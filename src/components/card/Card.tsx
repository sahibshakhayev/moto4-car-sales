import React, { FunctionComponent, useState } from "react";
import "../../../src/global.css";


import styles from  "./card.module.css";


interface CardProps {
    car: { image_src: string; brand: string; model: string; year:number; driven:number;status: string;
        predicted: boolean,
        value:number,     
        price: number,
        currency: string,
        liked:boolean;};
  }



const Card:FunctionComponent<CardProps>= ({car}: CardProps ) => {
    const[carLiked, setLiked] = useState(car.liked);

    return (
        <div className={styles.card}>
        <div className={styles.carimage}>
          <div className={styles.carphoto}>
            <img
              className={styles["image-car"]}
              alt="car Image"
              src={car.image_src}
            />
          </div>
          {car.status == "new" && 
          <div className={styles.salon}>
            <div className={styles["text-4"]}>Salon</div>
          </div>
           }
      
           {car.predicted && 
          <div className={styles["prediction-icon"]}>
            <img className={styles["union-icon"]} alt="union" src="/assets/icons/union.svg" />
          </div>
           }
          <img className={styles["heart-icon"]} alt="liked-icon" onClick={() => setLiked(!carLiked)} src={carLiked ? "/assets/icons/heart.svg" : "/assets/icons/heart-icon.svg"} />
        </div>
        <div className={styles["about-car"]}>
          <div className={styles["car-datas"]}>
            <div className={styles["brand-model"]}>{car.brand + " " + car.model}</div>
            <div className={styles["car-props"]}>{car.value +" L, " + car.driven + " km, " + car.year}</div>
          </div>
          <div className={styles["price-con"]}>
            <div className={styles["text-4"]}>Qiymət: </div>
            <div className={styles["car-price"]}>
              <b className={styles["text-3"]}>{car.price}</b>
              <img className="icon" alt="currency_icon" src={"/assets/icons/" + car.currency +".svg"} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;






