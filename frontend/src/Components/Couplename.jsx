import React, { useState, useEffect } from "react";
import '../Styles/Couplename.css'
const Couplename = () => {
  const targetDate = new Date("2025-02-10T11:20:00");

  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeLeft({});
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      className="couple-container"
    >
      <div className="couple-details">
        <p className="couple-name">Sanjay & Athulya</p>
        <p className="wedding-text">We are Getting Married</p>

        {/* Countdown Timer */}
        <div className="countdown-container">
          {timeLeft.days !== undefined ? (
            <>
              <div className="countdown-circle pink">
                {timeLeft.days}
                <span className="time-label">Days</span>
              </div>
              <div className="countdown-circle pink">
                {timeLeft.hours}
                <span className="time-label">Hours</span>
              </div>
              <div className="countdown-circle green">
                {timeLeft.minutes}
                <span className="time-label">Minutes</span>
              </div>
              <div className="countdown-circle pink">
                {timeLeft.seconds}
                <span className="time-label">Seconds</span>
              </div>
            </>
          ) : (
            <p className="big-day">The big day has arrived!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Couplename;
