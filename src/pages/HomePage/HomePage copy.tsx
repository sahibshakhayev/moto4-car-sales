import { FunctionComponent, useState, useCallback } from "react";
import "../../global.css"
import "./HomePage.css";



const HomePage: FunctionComponent = () => {
  
  return (
    <>
      <div className="home-page">
        <div className="navbar">
          <div className="logo">
            <img className="image-4-icon" alt="" src="/image-4@2x.png" />
          </div>
          <div className="page-links">
            <div className="page-names">
              <div className="pagename-con">
                <div className="text-2">Hamısı</div>
              </div>
              <div className="pagename-con">
                <div className="text-2">Xidmətlər</div>
              </div>
              <div className="pagename-con">
                <div className="text-2">Haqqımızda</div>
              </div>
              <div className="pagename-con">
                <div className="text-2">FAQ</div>
              </div>
            </div>
            <div className="user-pages">
              <img className="iconuser" alt="" src="/iconuser.svg" />
              <img className="iconuser" alt="" src="/iconheart.svg" />
              <div className="langs">
                <div className="az1">AZ</div>
              </div>
            </div>
            <div className="nav-adv">
              <div className="prog-adv">
                <img className="iconuser" alt="" src="/iconplus.svg" />
                <b className="text-3">Proqnozlu Elan</b>
              </div>
              <div className="add-adv">
                <b>Elan Yerləşdir</b>
              </div>
            </div>
          </div>
        </div>




        <div className="main">
          <div className="filter-con">
            <div className="filter">
              <div className="car-status">
                <div className="yeni1">
                  <div className="qiymt">Hamısı</div>
                </div>
                <div className="yeni1">
                  <div className="qiymt">Yeni</div>
                </div>
                <div className="yeni1">
                  <div className="qiymt">Sürülmüş</div>
                </div>
              </div>
              <div className="marka">
                <div className="text-2">Marka</div>
                <div className="marka-secimi">
                  <div className="text-3">Seçin</div>
                  <img
                    className="icondropdown"
                    alt=""
                    src="/icondropdown.svg"
                  />
                </div>
              </div>
              <div className="marka">
                <div className="text-2">Model</div>
                <div className="marka-secimi">
                  <div className="text-3">Seçin</div>
                  <img className="iconuser" alt="" src="/icondropdown.svg" />
                </div>
              </div>
              <div className="marka">
                <div className="text-2">Qiymət aralığı</div>
                <div className="min-max-qiymetler">
                  <div className="min-qiymet">
                    <div className="text-3">Min</div>
                  </div>
                  <div className="min-qiymet">
                    <div className="text-3">Max</div>
                  </div>
                </div>
              </div>
              <div className="pulvahidi">
                <div className="text-2">Pul vahidi</div>
                <div className="all-money-types">
                  <div className="azn">
                    <div className="checkbox">
                      <div className="box">
                        <img className="box-child" alt="" src="/vector-1.svg" />
                      </div>
                    </div>
                    <div className="text-2">AZN</div>
                  </div>
                  <div className="azn">
                    <div className="checkbox1">
                      <img className="shape-icon" alt="" src="/shape.svg" />
                    </div>
                    <div className="text-2">USD</div>
                  </div>
                  <div className="azn">
                    <div className="checkbox1">
                      <img className="shape-icon" alt="" src="/shape.svg" />
                    </div>
                    <div className="text-2">EURO</div>
                  </div>
                </div>
              </div>
              <div className="pulvahidi">
                <div className="text-2">İl aralığı</div>
                <div className="l-secimi">
                  <div className="il-secimi1">
                    <div className="text-3">Seçin</div>
                    <img
                      className="icondropdown"
                      alt=""
                      src="/icondropdown.svg"
                    />
                  </div>
                  <div className="il-secimi1">
                    <div className="text-3">Seçin</div>
                    <img
                      className="icondropdown"
                      alt=""
                      src="/icondropdown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="marka">
                <div className="model">Həcm aralığı (Litr)</div>
                <div className="min-max-qiymetler">
                  <div className="min-qiymet">
                    <div className="text-3">Min</div>
                  </div>
                  <div className="min-qiymet">
                    <div className="text-3">{`Max `}</div>
                  </div>
                </div>
              </div>
              <div className="pulvahidi">
                <div className="text-2">Maşın vəziyyəti</div>
                <div className="all-money-types">
                  <div className="azn">
                    <div className="checkbox1">
                      <img className="shape-icon" alt="" src="/shape1.svg" />
                    </div>
                    <div className="text-2">Vuruğu var</div>
                  </div>
                  <div className="azn">
                    <div className="checkbox">
                      <div className="box">
                        <img
                          className="box-child"
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                    </div>
                    <div className="text-2">Rənglənib</div>
                  </div>
                  <div className="azn">
                    <div className="checkbox1">
                      <img className="shape-icon" alt="" src="/shape1.svg" />
                    </div>
                    <div className="text-2">Qəzalı</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gstr">
              <div className="gstr1">Göstər</div>
            </div>
          </div>
          <div className="yeni-elanlar">
            <div className="yeni-elanlar1">Yeni Elanlar</div>
            <div className="all-cars">
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-5@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">{`Porsche Taycan `}</div>
                    <div className="l-34500-km">2.0 L, 0 km, 2023</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">56.400</b>
                      <img className="iconuser" alt="" src="/icondollar.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-7@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon1">
                    <img className="union-icon" alt="" src="/union1.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Toyota Corolla</div>
                    <div className="l-34500-km">1.0 L, 26.000 km, 2021</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">23.000</b>
                      <img className="iconuser" alt="" src="/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-17@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Abarth 595</div>
                    <div className="l-34500-km">1.0 L, 2.000 km, 2022</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">19.700</b>
                      <img className="iconuser" alt="" src="/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-8@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon1">
                    <img className="union-icon" alt="" src="/union1.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Mercedes AMG</div>
                    <div className="l-34500-km">3.0 L, 263.000 km, 2020</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">120.000</b>
                      <img className="iconuser" alt="" src="/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-9@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/union2.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Ford Mustang</div>
                    <div className="l-34500-km">3.5 L, 68.000 km, 2020</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">139.000</b>
                      <img className="iconuser" alt="" src="/iconeuro.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-15@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon1">
                    <img className="union-icon" alt="" src="/union1.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Honda Civic</div>
                    <div className="l-34500-km">2.0 L, 0 km, 2021</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">52.600</b>
                      <img className="iconuser" alt="" src="/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-16@2x.png"
                    />
                  </div>
                  <div className="salon">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Changan Uni-K</div>
                    <div className="l-34500-km">3.0 L, 0 km, 2022</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">86.700</b>
                      <img className="iconuser" alt="" src="/iconmanat.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon1">
                    <img className="union-icon" alt="" src="/union1.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">BMW M8</div>
                    <div className="l-34500-km">2.0 L, 12.000 km, 2023</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">95.000</b>
                      <img className="iconuser" alt="" src="/icondollar1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="carphoto">
                  <div className="carimage1">
                    <img
                      className="image-5-icon"
                      alt=""
                      src="/image-11@2x.png"
                    />
                  </div>
                  <div className="salon2">
                    <div className="qiymt">Salon</div>
                  </div>
                  <div className="prediction-icon">
                    <img className="union-icon" alt="" src="/union.svg" />
                  </div>
                  <img className="heart-icon" alt="" src="/heart-icon.svg" />
                </div>
                <div className="about-car">
                  <div className="car-datas">
                    <div className="porsche-taycan">Dodge Challenger</div>
                    <div className="l-34500-km">0 L, 85.000 km, 2022</div>
                  </div>
                  <div className="qiymet">
                    <div className="qiymt">{`Qiymət: `}</div>
                    <div className="masininqiymeti">
                      <b className="text-3">148.000</b>
                      <img className="iconuser" alt="" src="/iconmanat.svg" />
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
