import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const getGreeting = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      
      if (currentHour >= 0 && currentHour < 12) {
        setGreeting('Good morning!');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon!');
      } else {
        setGreeting('Good evening!');
      }
    }
    
    getGreeting();
  }, []);

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};

export default Greetings;
