// src/components/shared/BottomNav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoHeartOutline,
  IoMailOutline,
  IoMusicalNotesOutline,
  IoHome,
  IoHeart,
  IoMail,
  IoMusicalNotes,
} from "react-icons/io5";

const BottomNav = () => {
  const location = useLocation();

  const pinkPrimary = "#FF4D94";      // active icon color
  const pinkSecondary = "#FFE9F1";    // navbar background
  const pinkSubtle = "#FF9BC4";       // inactive icon
  const borderPink = "#FFD3E4";       // soft border
  const iconSize = 26;

  const navItems = [
    { icon: IoHomeOutline, activeIcon: IoHome, path: "/home", label: "Home" },
    { icon: IoHeartOutline, activeIcon: IoHeart, path: "/timeline", label: "Timeline" },
    { icon: IoMailOutline, activeIcon: IoMail, path: "/letters", label: "Letters" },
    { icon: IoMusicalNotesOutline, activeIcon: IoMusicalNotes, path: "/playlist", label: "Playlist" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      {/* STICKY BOTTOM BAR */}
      <div
        className="
          flex items-center justify-between
          w-full h-15
          rounded-t-3xl shadow-lg border-t
          px-8
        "
        style={{
          backgroundColor: pinkSecondary,
          borderColor: borderPink,
        }}
      >
        <nav className="flex justify-between items-center w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComp = isActive ? item.activeIcon : item.icon;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`
                  flex flex-col items-center transition-all duration-300
                  ${isActive ? "scale-110" : "scale-100"}
                `}
                style={{
                  color: isActive ? pinkPrimary : pinkSubtle,
                }}
              >
                <span className={`${isActive ? "animate-heart" : "animate-vibe"}`}>
                  <IconComp size={iconSize} />
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes heartbeat {
          0%   { transform: scale(1); }
          25%  { transform: scale(1.2); }
          40%  { transform: scale(1); }
          60%  { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .animate-heart {
          animation: heartbeat 1.4s ease-in-out infinite;
        }

        @keyframes microVibe {
          0% { transform: translateX(0); }
          25% { transform: translateX(-1px); }
          50% { transform: translateX(1px); }
          75% { transform: translateX(-1px); }
          100% { transform: translateX(0); }
        }

        .animate-vibe {
          animation: microVibe 1.8s ease-in-out infinite;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default BottomNav;
