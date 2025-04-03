import React, { useState, useEffect } from 'react';
// import './ComingSoon.css';
import './coming.model.css';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

 
  return (
    <div className="coming-soon-container">
      <div className="content-wrapper">
        <div className="logo">
        </div>
        <h2>Coming Soon</h2>
        <p>We're actively working on this. Stay tuned for updates!</p>

        <div className="countdown">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item">
              <span className="value">{value}</span>
              <span className="label">{unit}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;