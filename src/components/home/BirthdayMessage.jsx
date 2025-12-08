// src/components/home/BirthdayMessage.jsx

import React from 'react';

// The message is defined OUTSIDE the component (which is fine)
const message = `
To my dearest Aneesah,

The girl whose smile feels like sunrise.
Whose laughter softens the weight of the world.
You are warmth wrapped in human form.
A gentle light I never knew I needed.

Today, the universe pauses for you—
To admire your beauty, your softness, your magic.
May your joy overflow.
May your heart stay tender.
And may you always know how deeply you are loved.

Happy Birthday, my love.
`;

const BirthdayMessage = () => {
  const pinkPrimary = '#ff3385'; 
  
  // 🚨 FIX IS HERE: The variable 'paragraphs' must be defined inside the component scope.
  const paragraphs = message.trim().split('\n\n').map(p => p.trim());

  return (
    // Outer container: Centers the entire text block, padding is handled by Home.jsx
    <div className="text-center"> 
      {paragraphs.map((paragraph, pIndex) => (
        // Container for each stanza, adding vertical margin (mb-6) for spacing
        <div key={pIndex} className="mb-6"> 
          
          {/* 2. Split each paragraph by single newline to create line breaks */}
          {paragraph.split('\n').map((line, lIndex) => (
            <p
              key={lIndex}
              className={`text-lg leading-snug mb-0`} 
              style={{ 
                color: pinkPrimary, 
                fontFamily: 'Dancing Script, cursive', 
                fontWeight: 700, 
                textAlign: 'left',
                margin: '0 auto', 
                maxWidth: '300px' 
              }}
            >
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BirthdayMessage;