import { useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); // State to track the time
  const intervalRef = useRef(null); // Ref to store the interval ID

  const startTimer = () => {
    if (!intervalRef.current) { // Only start if there's no active interval
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
    intervalRef.current = null; // Reset the ref
  };

  const resetTimer = () => {
    pauseTimer(); // Pause the timer first
    setTime(0); // Reset the time
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Timer: {time}s</h1>
      <button onClick={startTimer} style={{ marginRight: "10px" }}>
        Start
      </button>
      <button onClick={pauseTimer} style={{ marginRight: "10px" }}>
        Pause
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
