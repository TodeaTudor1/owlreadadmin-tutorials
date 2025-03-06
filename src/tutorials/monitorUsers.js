import React, { useEffect } from "react";
import "./vrTutorial.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import TutorialDetail from "./tutorialDetail";

const MonitorUsers = () => {
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
        <h1>{t("tutorials.monitorUsers.title")}</h1>
      </div>
      <TutorialDetail title={t("step1")} description={t("monitorUsersStep1")} />
      <TutorialDetail
        title={t("step2")}
        description={t("monitorUsersStep2")}
        img="monitor_1.png"
        cssClass="img1"
      />
      <TutorialDetail
        title={t("step3")}
        description={t("monitorUsersStep3")}
        img="monitor_2.png"
        cssClass="img2"
      />
      <TutorialDetail title={t("step4")} description={t("monitorUsersStep4")} />
    </div>
  );
};

export default MonitorUsers;
