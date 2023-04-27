import { useState, useEffect } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((state) => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((state) => state + 1);
  };

  useEffect(() => {
    console.log("сработал");

    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Click on counterA {counterA} times
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Click on counterB {counterB} times
      </button>
    </>
  );
}

// import React, { useState } from "react";

// const StateTutorial = () => {
//   const [inputValue, setInputValue] = useState("Pedro");

//   let onChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//   };

//   return (
//     <div>
//       <input placeholder="enter something..." onChange={onChange} />
//       {inputValue}
//     </div>
//   );
// };

// export default StateTutorial;
