import React from "react";
import "./tutorialDetail.css"; // Make sure to create a corresponding CSS file

const TutorialDetail = ({ title, description, img, cssClass }) => {
  return (
    <div className="tutorialDetail">
      <div className="tutorialDetailStep">
        <h2>{title}</h2>
        <p>{description}</p>
        {img && (
          <img className={cssClass} src={`${process.env.PUBLIC_URL}/${img}`} />
        )}
      </div>
    </div>
  );
};

export default TutorialDetail;
