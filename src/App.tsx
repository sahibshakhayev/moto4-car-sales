import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FAQ from "./pages/FAQPage/FAQPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
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



  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage ads={cars}/>} />
      <Route path="/product/:id" element={<ProductPage ads={cars} />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
export default App;
