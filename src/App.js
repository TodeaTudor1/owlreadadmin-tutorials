import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Tutorials from "./tutorials/tutorials";
import VRTutorial from "./tutorials/vrTutorial";
import GettingStarted from "./tutorials/gettingStarted";
import MonitorUsers from "./tutorials/monitorUsers";
import Calibration from "./tutorials/Calibration";
import { VideoUrlProvider } from "./tutorials/tutorialsContext";
const App = () => {
  return (
    <VideoUrlProvider>
      <BrowserRouter>
        <div className="appStyle">
          <Routes>
            <Route path="/" element={<Tutorials />} />
            <Route path="/VRTutorial" element={<VRTutorial />} />
            <Route path="/gettingStarted" element={<GettingStarted />} />
            <Route path="/monitorUsers" element={<MonitorUsers />} />
            <Route path="/calibration" element={<Calibration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </VideoUrlProvider>
  );
};

export default App;
