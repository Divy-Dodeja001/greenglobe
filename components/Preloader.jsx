"use client";

import { useEffect, useState } from "react";
import "../styles/preloader.css"

export default function Preloader({ children }) {
  const [showLoader, setShowLoader] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("preloaderSeen");

    if (seen === "true") {
      setReady(true);
    } else {
      setShowLoader(true);
      
    }
  }, []);

  const handleEnd = () => {
    sessionStorage.setItem("preloaderSeen", "true");
    setShowLoader(false);
    setReady(true);
  };

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <video
            className="preloader-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleEnd}
          >
            <source src="/preloader.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className={`main-content ${ready ? "loaded" : "loading"}`}>
        {children}
      </div>
    </>
  );
}