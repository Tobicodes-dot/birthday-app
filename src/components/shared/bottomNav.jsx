import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoHomeOutline, 
  IoHeartOutline, 
  IoMailOutline, 
  IoMusicalNotesOutline 
} from 'react-icons/io5';

const BottomNav = () => {
  const navItems = [
    { icon: IoHomeOutline, path: '/home', label: 'Home' },
    { icon: IoHeartOutline, path: '/timeline', label: 'Timeline' }, 
    { icon: IoMailOutline, path: '/letters', label: 'Letters' },
    { icon: IoMusicalNotesOutline, path: '/playlist', label: 'Playlist' },
  ];

  const pinkColor = '#ff3385';
  const secondaryPink = '#ffe6f0';

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Curved Pink Section */}
      <div 
        className="absolute bottom-0 w-full h-24"
        style={{
          backgroundColor: secondaryPink,
          borderTopLeftRadius: '50% 100px',
          borderTopRightRadius: '50% 100px',
          boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Navigation Links */}
        <nav className="flex justify-around items-start pt-3 h-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex flex-col items-center transition-colors duration-200"
              style={{ color: pinkColor }}
            >
              <item.icon size={28} /> {/* Use size prop instead of Tailwind classes */}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
