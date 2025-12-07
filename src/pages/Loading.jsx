import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loadingAnimations.css";
import HeartImage from "../assets/images/Ellipse.png";

const ANIMATION_DURATION_MS = 9000;

const Loading = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        navigate("/home");
      }, ANIMATION_DURATION_MS);

      return () => clearTimeout(timer);
    }
  }, [imageLoaded, navigate]);

  return (
    <div className="relative w-screen h-screen bg-[#ffe6f0] flex justify-center items-center overflow-hidden">
      
      {/* Soft Background Glow */}
      <div
        className="absolute w-[55vw] h-[55vw] rounded-full 
        bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,204,221,0.3)_50%,rgba(255,230,240,0)_100%)] 
        blur-[55px] opacity-80 z-0"
      ></div>

      {/* Heart Image */}
      <img
        src={HeartImage}
        alt="Heart"
        onLoad={() => setImageLoaded(true)}
        className="beating-heart absolute w-48 h-auto z-10 opacity-0"
        style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s ease-in" }}
      />

      {/* Animated Name */}
      {imageLoaded && (
        <h1
          className="text-[#ff3385] text-7xl font-bold z-20 absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Dancing Script]"
        >
          <span className="name-text">Aneesah</span>
        </h1>
      )}
    </div>
  );
};

export default Loading;
