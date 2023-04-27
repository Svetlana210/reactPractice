/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import styles from "./color-picker.module.css";

const ColorPicker = ({ options }) => {
  const [state, setState] = useState({ activeId: 0 });

  useEffect(() => {
    console.log("change");
  }, [state.activeId]);

  const makeOptionClassName = (index) => {
    return index === state.activeId ? styles.activeOption : styles.option;
  };
  const mutate = (obj) => {
    setState((prevState) => {
      console.log(prevState.activeId === obj.activeId);
      if (prevState.activeId === obj.activeId) return prevState;
      return obj;
    });
  };
  const { label } = options[state.activeId];
  console.log("render");
  // console.log(state.activeId);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => mutate({ activeId: index })}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
