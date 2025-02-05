import React, { useState, useEffect } from "react";

const Couplename = () => {
  // Set the target date and time
  const targetDate = new Date("2025-02-10T11:20:00");

  const [timeLeft, setTimeLeft] = useState({});

  // Function to calculate the remaining time
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
    // Update the countdown every second
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-center"
      style={{
        backgroundImage: "url('/images/couple.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="text-white text-7xl md:text-5xl px-4 py-2 rounded-lg"
        style={{
          fontFamily: "'Josefin Sans', serif",
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 10,
        }}
      >
        <p style={{ fontSize: "40px", color: "white" }}>Sanjay & Athulya</p>
        <p style={{ fontSize: "25px" }}>We are Getting Married</p>

        {/* Countdown Timer */}
        <div style={{ fontSize: "30px", marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          {timeLeft.days !== undefined ? (
            <>
              <div
                className="flex items-center justify-center w-20 h-20 bg-pink-500 text-white rounded-full"
                style={{ fontSize: "20px" }}
              >
                {timeLeft.days} <span className="text-sm">Days</span>
              </div>
              <div
                className="flex items-center justify-center w-20 h-20 bg-pink-500 text-white rounded-full"
                style={{ fontSize: "20px" }}
              >
                {timeLeft.hours} <span className="text-sm">Hours</span>
              </div>
              <div
                className="flex items-center justify-center w-20 h-20 bg-pink-500 text-white rounded-full"
                style={{ fontSize: "20px" }}
              >
                {timeLeft.minutes} <span className="text-sm">Minutes</span>
              </div>
              <div
                className="flex items-center justify-center w-20 h-20 bg-pink-500 text-white rounded-full"
                style={{ fontSize: "20px" }}
              >
                {timeLeft.seconds} <span className="text-sm">Seconds</span>
              </div>
            </>
          ) : (
            <p>The big day has arrived!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Couplename;
