import { FunctionComponent,useState} from "react";
import React from "react";
import "./PruductPage.css";
import "../../global.css"
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Coment from "../../components/comments/Coment";
import Footer from "../../components/footer/Footer";

interface ProductPageProps {

    ads: {id:number; image_src: string; brand: string; model: string; year:number; driven:number;status: string;
      predicted: boolean,
      value:number,     
      price: number,
      currency: string,
      liked:boolean;}[]
    
    }


const ProductPage: FunctionComponent<ProductPageProps> = ({ads}:ProductPageProps) => {
    const [ImgSrc, setImage]  = useState("/assets/img/image-7@2x.png"); 
    
  return (
   
    <>
    <Navbar/>
    <div className="cardetail">
      <div className="left">
       <img onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}} src="/assets/img/product_test/image18.svg" alt="Car" />
       <img onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}} src="/assets/img/product_test/image19.svg" alt="Car" />
       <img  onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}}  src="/assets/img/product_test/image20.svg" alt="Car" />
       <img onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}}   src="/assets/img/product_test/image21.svg" alt="Car" />
       <img onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}}   src="/assets/img/product_test/image22.svg" alt="Car" />
       <img onClick={(e) => {setImage(e.currentTarget.getAttribute('src'))}}     src="/assets/img/product_test/image23.svg" alt="Car" />
      </div>
      <div className="center">
        <img src={ImgSrc} alt="Car Center" />
        <div className="modelHead">
          <div className="left">
            <span>Toyoto Corolla</span>
            <span>1.0 L, 26.000 km, 2021</span>
          </div>
          <div className="right">
            <div className="priceCard">
              <span>23.000</span>
              <img src="/assets/img/product_test/euro.svg" alt="Currency"/>
            </div>
            <div className="estimateCard">
              <span id="estimate">Təxmini qiyməti 41.780 man</span>
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
          <button className="contactButton"  onClick={() => alert("Not Developed!")}>Əlaqə saxla</button>
          <div className="like">
            <img src="/assets/img/product_test/heart.png" alt="heart"  onClick={() => alert("Not Developed!")} />
          </div>
        </div>
      </div>
    </div>
    <Coment/>
    <div className="other">
      <div className="head">
        <span>Digər Elanlar</span>
      </div>
     
      <div className="bottom">

        <Card car={ads[0]} />
        <Card car={ads[2]} />
        <Card car={ads[3]} />
        <Card car={ads[4]} />
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default ProductPage;
