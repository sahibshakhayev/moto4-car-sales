
import { FunctionComponent, useState, useCallback, useEffect } from "react";
import "../../global.css"
import "./HomePage.css";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';
import Card from "../../components/card/Card";
import React from "react";

interface HomePageProps {

ads: {id:number; image_src: string; brand: string; model: string; year:number; driven:number;status: string;
  predicted: boolean,
  value:number,     
  price: number,
  currency: string,
  liked:boolean;}[]

}




const HomePage: FunctionComponent<HomePageProps> = ({ads}:HomePageProps) => {
  
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
  
    
    
  setData(ads);
  
  
  
  
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
  
  const carItems = data.map((carItem) =>
  <Card car={carItem}></Card>
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
