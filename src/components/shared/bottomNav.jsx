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
  const iconSize = 32;

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
          w-full h-16
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
                className={`flex flex-col items-center transition-all duration-300 
                ${isActive ? "scale-110" : "scale-100"}`}
                style={{
                  color: isActive ? pinkPrimary : pinkSubtle,
                }}
              >
                <span className={`${isActive ? "glow-active" : ""}`}>
                  <IconComp size={iconSize} />
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* GLOW EFFECT */}
      <style>{`
        .glow-active {
          filter: drop-shadow(0 0 6px rgba(255, 77, 148, 0.8))
                  drop-shadow(0 0 0px rgba(255, 77, 148, 0.6));
        }
      `}</style>
    </div>
  );
};

export default BottomNav;
