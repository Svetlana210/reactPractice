import React, { useRef, useState } from "react";

function RefTutorial() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const onClick = () => {
    setValue(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>{value}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
