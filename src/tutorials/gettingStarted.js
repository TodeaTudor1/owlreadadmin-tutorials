import React, { useEffect } from "react";
import "./vrTutorial.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import TutorialDetail from "./tutorialDetail";

const GettingStarted = () => {
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
        <h1>{t("tutorials.gettingStarted.title")}</h1>
      </div>
      <TutorialDetail
        title={t("gettingStartedStep1Title")}
        description={t("gettingStartedStep1Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep2Title")}
        description={t("gettingStartedStep2Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep3Title")}
        description={t("gettingStartedStep3Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep4Title")}
        description={t("gettingStartedStep4Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep5Title")}
        description={t("gettingStartedStep5Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep6Title")}
        description={t("gettingStartedStep6Description")}
      />
      <TutorialDetail
        title={t("gettingStartedStep7Title")}
        description={t("gettingStartedStep7Description")}
      />
    </div>
  );
};

export default GettingStarted;
