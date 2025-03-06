import React, { useEffect } from "react";
import "./vrTutorial.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const VRTutorial = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");

    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [location]); // Run the effect when `location` changes

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="pd-value-screen">
      <div className="header">
        <button className="backButton" onClick={handleBackClick}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1>{t("headerTitle")}</h1>
      </div>
      <div className="step">
        <h2>{t("step1")}</h2>
        <p>{t("step1Description")}</p>
        <img
          className="img1"
          src={`${process.env.PUBLIC_URL}/vr_tutorial1.png`}
        />
      </div>
      <div className="step">
        <h2>{t("step2")}</h2>
        <p>{t("step2Description")}</p>
        <img
          className="img2"
          src={`${process.env.PUBLIC_URL}/vr_tutorial2.png`}
        />
      </div>
    </div>
  );
};

export default VRTutorial;
