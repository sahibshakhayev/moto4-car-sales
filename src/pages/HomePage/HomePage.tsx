
import { FunctionComponent, useState, useCallback, useEffect } from "react";
import "../../global.css"
import "./HomePage.css";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';






const HomePage: FunctionComponent = () => {
  
  const [data, setData] = useState(null);

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
        price: 56.400,
        currency: "usd"
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
        price: 23.000,
        currency: "eur"
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
        price: 19.700,
        currency: "azn"
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
        currency: "eur"
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
        currency: "eur"
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
        price: 52.600,
        currency: "azn"
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
        price: 86.700,
        currency: "azn"
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
        currency: "usd"
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
        currency: "azn"
      }
    ];
    
  
  
  
  
  
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
  



  return (
    <>
      <div className="home-page">
        <Navbar/>




        <div className="main">
         <Filter onApply={handleApply} />
          <div className="page-content">
            <div className="new-adv">Yeni Elanlar</div>
            <div className="all-cars">
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-5@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="text-4">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/assets/icons/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">{`Porsche Taycan `}</div>
                    <div className="car-props">2.0 L, 0 km, 2023</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">56.400</b>
                      <img className="icon" alt="" src="/assets/icons/icondollar.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-7@2x.png"
                    />
                  </div>
                  
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Toyota Corolla</div>
                    <div className="car-props">1.0 L, 26.000 km, 2021</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">23.000</b>
                      <img className="icon" alt="" src="/assets/icons/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-17@2x.png"
                    />
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/assets/icons/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Abarth 595</div>
                    <div className="car-props">1.0 L, 2.000 km, 2022</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">19.700</b>
                      <img className="icon" alt="" src="/assets/icons/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-8@2x.png"
                    />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Mercedes AMG</div>
                    <div className="car-props">3.0 L, 263.000 km, 2020</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">120.000</b>
                      <img className="icon" alt="" src="/assets/icons/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-9@2x.png"
                    />
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/assets/icons/union2.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Ford Mustang</div>
                    <div className="car-props">3.5 L, 68.000 km, 2020</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">139.000</b>
                      <img className="icon" alt="" src="/assets/icons/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-15@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="text-4">Salon</div>
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Honda Civic</div>
                    <div className="car-props">2.0 L, 0 km, 2021</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">52.600</b>
                      <img className="icon" alt="" src="/assets/icons/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-16@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="text-4">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/assets/icons/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Changan Uni-K</div>
                    <div className="car-props">3.0 L, 0 km, 2022</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">86.700</b>
                      <img className="icon" alt="" src="/assets/icons/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-13@2x.png"
                    />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">BMW M8</div>
                    <div className="car-props">2.0 L, 12.000 km, 2023</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">95.000</b>
                      <img className="icon" alt="" src="/assets/icons/icondollar1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carimage">
                  <div className="carphoto">
                    <img
                      className="image-car"
                      alt=""
                      src="/assets/img/image-11@2x.png"
                    />
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/assets/icons/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/assets/icons/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="brand-model">Dodge Challenger</div>
                    <div className="car-props">0 L, 85.000 km, 2022</div>
                  </div>
                  <div className="price-con">
                    <div className="text-4">{`Qiymət: `}</div>
                    <div className="car-price">
                      <b className="text-3">148.000</b>
                      <img className="icon" alt="" src="/assets/icons/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
