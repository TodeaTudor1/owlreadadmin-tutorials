import React, { useEffect, useState } from "react";
import "./vrTutorial.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import TutorialDetail from "./tutorialDetail";
import ReactPlayer from "react-player";
import "./Calibration.css";
import { useVideoUrl } from "./tutorialsContext";
const VideoModal = ({ url, onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <button onClick={onClose} className="modalCloseButton">
        &times;
      </button>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {}
        {/* */}
        <ReactPlayer
          className="reactPlayer"
          url={url}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { autoplay: 1 },
            },
          }}
        />
      </div>
    </div>
    // <div className="videoModal">
    //   <div className="videoModalContent">
    //     <div className="videoPlayerWrapper">
    //       <ReactPlayer
    //         className="reactPlayer"
    //         url={url}
    //         playing={true}
    //         controls={true}
    //         width="100%"
    //         height="100%"
    //         config={{
    //           youtube: {
    //             playerVars: { autoplay: 1 },
    //           },
    //         }}
    //       />
    //     </div>
    //     <button onClick={onClose} className="videoModalClose">
    //       &times;
    //     </button>
    //   </div>
    // </div>
  );
};
const Calibration = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { videoUrl, setVideoUrl } = useVideoUrl();
  let location = useLocation();
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
  }, [location]); // Run the effect when `location` changes

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleVideoClick = () => {
    setShowVideo(true);

    setTimeout(() => {
      const videoContainer = document.querySelector(".videoContainer");
      if (videoContainer && videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      }
    }, 0);
  };

  const handleVideoClose = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setShowVideo(false);
  };

  const handleOverlayClick = (e) => {
    // Check if the click is directly on the overlay and not its children
    if (e.target.classList.contains("videoOverlay")) {
      handleVideoClose();
    }
  };
  return (
    <div className="pd-value-screen">
      <div className="header">
        <button className="backButton" onClick={handleBackClick}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1>{t("tutorials.howToCalibrate.title")}</h1>
      </div>
      <div className="videoWatchSection" onClick={handleVideoClick}>
        <img
          src={`${process.env.PUBLIC_URL}/video.png`}
          alt="Watch Video"
          className="videoIcon"
        />
        <p className="watchVideoText">{t("watchVideo")}</p>
      </div>

      <TutorialDetail
        title={t("step1")}
        description={t("howToCalibrateStep1")}
        img={"calibration_4.png"}
        cssClass={"img3"}
      />
      <TutorialDetail
        title={t("step2")}
        description={t("howToCalibrateStep2")}
        img={"calibration_2.png"}
        cssClass={"img3"}
      />
      <TutorialDetail
        title={t("step3")}
        description={t("howToCalibrateStep3")}
        img={"calibration_3.png"}
        cssClass={"img3"}
      />
      <TutorialDetail
        title={t("step4")}
        description={t("howToCalibrateStep4")}
        img={"calibration_4.png"}
        cssClass={"img3"}
      />
      {showVideo && (
        <VideoModal
          url={videoUrl}
          onClose={handleVideoClose}
          onOverlayClick={handleOverlayClick}
        />
      )}
    </div>
  );
};

export default Calibration;
