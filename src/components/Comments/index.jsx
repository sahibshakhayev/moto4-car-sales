import React from "react";
import "./index.css";
import User from "../../assets/user.png";
const OwnerComment = () => {
  return (
    <div className="container">
      <div className="top">
        <img src={User} alt="user" className="avatar" />
        <div className="details">
          <span className="userNameAndSurname">Kənan Həsənov</span>
          <div className="rate">
            <span className="score">4.0</span>
            <div className="starts">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                  fill="#8117AA"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                  fill="#8117AA"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                  fill="#8117AA"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                  fill="#8117AA"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                  fill="#D4D4D4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>
          Bu hissədə artıq maşın sahibinin maşını haqda məlumatları və şərhləri
          yerləşəcək. Məlumat nə qədər çox olsa o qədər də səhifə uzanacaq. Text
          uzunluğunu uzatmamağa səbəb isə özəlliklər arta biləcəyi üçün artdıqca
          aşağı doğru uzanacaq və maşın sahibinin commentləri ilə üst üstə
          düşəcək.
        </span>
      </div>
      <div className="addComment">
        <span>Şərhlər</span>
        <input type="text" placeholder="Şərh yazmağa başlayın" />
      </div>
    </div>
  );
};

export default OwnerComment;
