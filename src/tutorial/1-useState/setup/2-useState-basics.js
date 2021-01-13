import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState())
  // let state = useState('hassan')
  // let value = state[0];
  // let value1 = state.length;

  // let handler = state[state.length - 1]
  // console.log(handler, value, value1)
  const [text, setText] = useState(true);

  const handleClick = () => {
    if(text == 1 ) setText('hello World');
    else setText('hell')
  };
// console.log(setText('hello'))
  return (
    <React.Fragment>
      <h2>
        {text}
        {/* useState basic example */}
      </h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
