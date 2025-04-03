import React, { useState, useEffect } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Set launch date to 30 days from now
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
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };
  
  return (
    <div className="coming-soon-container">
      {/* Left side with background image */}
      <div className="coming-soon-image-container">
        <div className="overlay" style={{background:"rgb(169 57 55)"}}></div>
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon"  style={{background:"black",}}>H</span>
            <div className="logo-text" >
              <h1>HOUSBE</h1>
              <p>House to be</p>
            </div>
          </div>
          
        </div>
        
        <div className="tagline">
           <div style={{marginBottom:"250px", fontWeight:"bold",fontFamily:"serif"}}>
             <h2>We're actively working on this. Stay tuned for updates! 🚀</h2>
           </div>
          {/* <h2>Transforming the way you find your dream home</h2> */}
          <p>Innovative real estate solutions for modern living.</p>
        </div>
      </div>
      
      {/* Right side with content */}
      <div className="coming-soon-content">
        <div className="content-wrapper">
          {/* Mobile logo */}
          <div className="mobile-logo">
            <span className="logo-icon">H</span>
            <div className="logo-text">
              <h1>HOUSBE</h1>
              <p>House to be</p>
            </div>
          </div>
          
          <h2 className="title">We're Coming Soon</h2>
          <p className="description">
            Our team is working hard to bring you an exceptional real estate experience. 
            Stay tuned for our launch and be the first to discover our innovative platform.
          </p>
          
          {/* Countdown timer */}
          <div className="countdown-container">
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
          
          {/* Subscription form */}
          <div className="subscription-container">
            <h3>Get notified when we launch</h3>
            {isSubscribed ? (
              <div className="success-message">
                Thank you for subscribing! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="subscription-form">
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">Notify Me</button>
                </div>
                <p className="privacy-note">We respect your privacy and will never share your information.</p>
              </form>
            )}
          </div>
          
          {/* Features preview */}
       
          
          {/* Social media links */}
          <div className="social-container">
            <p>Follow us for updates</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <span>f</span>
              </a>
              <a href="#" className="social-icon">
                <span>in</span>
              </a>
              <a href="#" className="social-icon">
                <span>tw</span>
              </a>
              <a href="#" className="social-icon">
                <span>ig</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;