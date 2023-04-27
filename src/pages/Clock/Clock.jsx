import React, { useState, useEffect, useRef } from "react";

function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("this is interval of each 1000ms" + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Это функция очистки перед следующим вызовом useEffect");
      stop();
    };
  }, []);
  const stop = () => {
    clearInterval(intervalId.current);
  };
  console.log(intervalId.current);
  return (
    <div>
      <p>Current time:{time.toLocaleString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
export default Clock;
