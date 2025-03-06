import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./tutorials.css";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/youtube";
import { useVideoUrl } from "./tutorialsContext";

const TutorialItem = ({ title, description, icon, onClick }) => {
  return (
    <div className="cardStyle" onClick={onClick}>
      <div className="iconContainerStyle">
        <img
          src={`${process.env.PUBLIC_URL}/${icon}`}
          alt={title}
          style={{ width: "46px", height: "46px" }}
        />
      </div>
      <div>
        <div
          style={{
            fontWeight: "800",
            marginBottom: "4px",
            marginLeft: "10px",
            fontSize: "16px",
          }}
        >
          {title}
        </div>
        <div className="textStyle">{description}</div>
      </div>
    </div>
  );
};

const Tutorials = () => {
  let location = useLocation();
  const [showVideo, setShowVideo] = useState(false);
  const { setVideoUrl } = useVideoUrl();

  let navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");

    // Set the video URL based on the lang query parameter
    const url =
      lang === "sv"
        ? "https://www.youtube.com/watch?v=_X6aHsDrBc8"
        : "https://www.youtube.com/watch?v=iCC7aRg3nM0";
    setVideoUrl(url);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [location]);

  const handleTutorialClick = (path) => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");

    // Check if there is a lang parameter and append it to the path
    if (lang) {
      navigate(`${path}?lang=${lang}`);
    } else {
      navigate(path);
    }
  };

  // // Track which tutorials have been clicked
  // const [clickedTutorials, setClickedTutorials] = useState({});

  // // Handle the click of a tutorial
  // const handleTutorialClick = (title) => {
  //   setClickedTutorials({ ...clickedTutorials, [title]: true });
  // };

  return (
    <div className="tutorialsContainer">
      {/* <TutorialItem
        icon="ruler.png"
        title={t("tutorials.pupillaryDistance.title")}
        description={t("tutorials.pupillaryDistance.description")}
        // onClick={() => handleTutorialClick("Pupillary Distance")}
      /> */}
      <TutorialItem
        icon="getting_started.png"
        title={t("tutorials.gettingStarted.title")}
        description={t("tutorials.gettingStarted.description")}
        onClick={() => handleTutorialClick("/gettingStarted")}
      />
      <TutorialItem
        icon="virtual_Reality.png"
        title={t("tutorials.setPDValueToVR.title")}
        description={t("tutorials.setPDValueToVR.description")}
        onClick={() => handleTutorialClick("/VRTutorial")}
      />
      <TutorialItem
        icon="accuracy.png"
        title={t("tutorials.howToCalibrate.title")}
        description={t("tutorials.howToCalibrate.description")}
        onClick={() => handleTutorialClick("/calibration")}
      />
      <TutorialItem
        icon="monitor_users.png"
        title={t("tutorials.monitorUsers.title")}
        description={t("tutorials.monitorUsers.description")}
        onClick={() => handleTutorialClick("/monitorUsers")}
      />
    </div>
  );
};

export default Tutorials;
