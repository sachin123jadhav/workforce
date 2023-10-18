import React, { useState, useEffect } from 'react';

function SignIn() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} Hrs`;
  };

  const startTimer = () => {
    if (buttonClicked) {
      // If "Check Out" was clicked, stop the timer
      setTimerRunning(false);
      setButtonClicked(false); // Reset the button click status
    } else {
      // If "Check In" was clicked, resume the timer
      setTimerRunning(true);
      setButtonClicked(true); // Set the button click status to true
    }
  };

  useEffect(() => {
    let timerInterval;

    if (timerRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning]);

  // Apply a class based on the buttonClicked state
  const buttonClass = buttonClicked ? 'btn btn-danger' : 'btn btn-success';

  // Change the button text based on the buttonClicked state
  const buttonText = buttonClicked ? 'Check Out' : 'Check In';

  return (
    <div>
      <button
        className={`font-normal text-lg ${buttonClass}`}
        onClick={startTimer}
      >
        <span className="mdi:clock-outline mr-2"></span>
        {buttonText}
      </button>
      <h3 className="mt-5">{formatTime(time)}</h3>
    </div>
  );
}

export default SignIn;
