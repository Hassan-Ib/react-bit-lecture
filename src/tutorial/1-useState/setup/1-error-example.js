import React from "react";

const ErrorExample = () => {
  let title = "randon title";

  const handleClick = () => {
    title = "hello people";
    // it wont be rerender i dont know the main reason
    // basic document selector for the object we created
    // but the listener isn't referring back to the document to re render the changed value
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
