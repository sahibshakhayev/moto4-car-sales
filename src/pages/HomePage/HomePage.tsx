
import { FunctionComponent, useState, useCallback, useEffect } from "react";
import "../../global.css"
import "./HomePage.css";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';






const HomePage: FunctionComponent = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
  
    // axios
    //   .get("https://example.com/api/cars")
    //   .then((response) => {
       
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  
    let cars = [
      {
        id: 3434,
        brand: "Porsche",
        model: "Taycan",
        year: 2023,
        driven: 0,
        status: "new",
        predicted: true,
        value:2.0,
        price: 56400,
        currency: "usd",
        liked:true,
        image_src:"/assets/img/image-5@2x.png"
      },
      {
        id: 5656,
        brand: "Toyota",
        model: "Corolla",
        year: 2021,
        driven: 26000,
        status: "driven",
        predicted: false,
        value:1.0,
        price: 23000,
        currency: "eur",
        liked:false,
        image_src:"/assets/img/image-7@2x.png"
      },
      {
        id: 9090,
        brand: "Abarth",
        model: "595",
        year: 2022,
        driven: 2000,
        status: "driven",
        predicted: true,
        value:1.0,
        price: 19700,
        currency: "azn",
        liked:true,
        image_src:"/assets/img/image-17@2x.png"
      },
      {
        id: 1010,
        brand: "Mercedes",
        model: "AMG",
        year: 2020,
        driven: 263000,
        status: "driven",
        predicted: false,
        value:3.0,
        price: 12000,
        currency: "eur",
        liked:false,
        image_src:"/assets/img/image-8@2x.png"

      },
      {
        id: 1212,
        brand: "Ford",
        model: "Mustang",
        year: 2020,
        driven: 68000,
        status: "driven",
        predicted: true,
        value:3.5,
        price: 13900,
        currency: "eur",
        liked:false,
        image_src:"/assets/img/image-9@2x.png"
      },
      {
        id: 1313,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        driven: 0,
        status: "new",
        predicted: false,
        value:2.0,
        price: 52600,
        currency: "azn",
        liked:false,
        image_src:"/assets/img/image-15@2x.png"
      },
      {
        id: 1414,
        brand: "Changan",
        model: "Uni-K",
        year: 2022,
        driven: 0,
        status: "new",
        predicted: true,
        value:3.0,
        price: 86700,
        currency: "azn",
        liked:false,
        image_src:"/assets/img/image-16@2x.png"
      },
      {
        id: 1515,
        brand: "BMW",
        model: "M8",
        year: 2023,
        driven: 12000,
        status: "driven",
        predicted: false,
        value:2.0,
        price: 95000,
        currency: "usd",
        liked:false,
        image_src:"/assets/img/image-13@2x.png"
      },
      {
        id: 1616,
        brand: "Dodge",
        model: "Challenger",
        year: 2022,
        driven: 85000,
        status: "driven",
        predicted: true,
        value:0,     
        price: 148000,
        currency: "azn",
        liked:false,
        image_src:"/assets/img/image-11@2x.png"
      }
    ];
    
  setData(cars)
  
  
  
  
  }, []);
  


  const handleApply = (filter) => {
    const params = {
      status:filter.status,
      brand: filter.brand,
      model: filter.model,
      minPrice: filter.minPrice,
      maxPrice: filter.maxPrice,
      currency: filter.currency,
      minYear: filter.minYear,
      maxYear: filter.maxYear,
      minVolume: filter.minVolume,
      maxVolume: filter.maxVolume,
      condition: filter.condition,
    };
  
    // axios.get("https://example.com/api/cars", { params })
    // .then((response) => {
    //   setData(response.data);
    // })
    // .catch((error) => {
      
    //   console.error(error);
    // });
  
  
  
   
  };
  
  const carItems = data.map((car) =>
  <>
  <div key={car.id} className="card">
  <div className="carimage">
    <div className="carphoto">
      <img
        className="image-car"
        alt=""
        src={car.image_src}
      />
    </div>
    {car.used == "new" && 
    <div className="salon">
      <div className="text-4">Salon</div>
    </div>
     }

     {car.predicted && 
    <div className="prediction-icon">
      <img className="union-icon" alt="union" src="/assets/icons/union.svg" />
    </div>
     }
    <img className="heart-icon" alt="liked-icon"  src={car.liked ? "/assets/icons/heart.svg" : "/assets/icons/heart-icon.svg"} />
  </div>
  <div className="about-car">
    <div className="car-datas">
      <div className="brand-model">{car.brand + " " + car.model}</div>
      <div className="car-props">{car.value +" L, " + car.driven + " km, " + car.year}</div>
    </div>
    <div className="price-con">
      <div className="text-4">{`Qiymət: `}</div>
      <div className="car-price">
        <b className="text-3">{car.price}</b>
        <img className="icon" alt="" src={"/assets/icons/" + car.currency +".svg"} />
      </div>
    </div>
  </div>
</div>
 </> 
);


  return (
    <>
      <div className="home-page">
        <Navbar/>




        <div className="main">
         <Filter onApply={handleApply} />
          <div className="page-content">
            <div className="new-adv">Yeni Elanlar</div>
            <div className="all-cars">
              {carItems}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
