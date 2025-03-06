import React, { createContext, useContext, useState } from "react";

const VideoUrlContext = createContext();

export const VideoUrlProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <VideoUrlContext.Provider value={{ videoUrl, setVideoUrl }}>
      {children}
    </VideoUrlContext.Provider>
  );
};

export const useVideoUrl = () => useContext(VideoUrlContext);
