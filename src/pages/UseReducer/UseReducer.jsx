// import { useReducer } from "react";
// import styles from "./user-reducer.module.css";

// function countReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + action.payload };

//     case "decrement":
//       return { ...state, count: state.count - action.payload };

//     default:
//       throw new Error(`Unsupported action type ${action.type}`);
//   }
// }

// const Counter = () => {
//   const [state, dispatch] = useReducer(countReducer, { count: 0 });
//   return (
//     <div className={styles.container}>
//       <p className={styles.value}> {state.count}</p>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: "increment", payload: 1 })}
//       >
//         Increase
//       </button>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: "decrement", payload: 1 })}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// };
// export default Counter;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
