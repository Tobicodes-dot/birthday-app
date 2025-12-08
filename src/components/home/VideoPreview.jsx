import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import birthdayVideo from "../../assets/videos/her.mp4";

export default function VideoPreview() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const openFullscreen = () => {
    setIsFullscreen(true);
    setTimeout(() => {
      videoRef.current?.play();
      videoRef.current.muted = false;
    }, 300);
  };

  const closeFullscreen = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
    setIsFullscreen(false);
  };

  return (
    <>
      {/* Preview box */}
     <div className="relative w-full h-[45vh] overflow-hidden curved-bottom">
        <video
            src={birthdayVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70 blur-[1px]"
        />

        {/* Dark tint */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Play button */}
        <div
            onClick={openFullscreen}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="w-14 h-14 flex items-center justify-center bg-white/25 backdrop-blur-md rounded-full border border-white/40 active:scale-95 transition-all">
            <FaPlay className="text-white text-xl ml-1" />
            </div>
        </div>
      </div>


      {/* Fullscreen player */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <video
            ref={videoRef}
            src={birthdayVideo}
            className="w-full h-full object-contain"
            controls
            autoPlay
          />

          {/* Close button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-xl bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg active:scale-95"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
