//copied straight from claude

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || seconds === 0) return;
    const id = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds]);

  function reset() {
    setRunning(false);
    setSeconds(10);
  }

  const done = seconds === 0;

  return (
    <div className="timer">
      <p className="time">{done ? "Done!" : seconds}</p>
      <button onClick={() => setRunning(!running)} disabled={done}>
        {running && !done ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}