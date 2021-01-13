import React, { useState } from "react";

const UseStateObject = () => {
  const data = {
    count: 0,
    name: "peter",
    age: 24,
    messages: ["yoo", "i'm", "hassan", "guru", "javaScript/React", "developer"],
    message: "yoo",
    setmessage: function () {
      let newMessage;
      if (this.count <= this.messages.length - 2) {
        this.count += 1;

        newMessage = this.messages[this.count];
      } else {
        this.count = 0;
        newMessage = this.messages[this.count];
      }
      this.message = newMessage;
    },
  };
  const [person, setPerson] = useState(data);

  console.log(person.count);

  const handler = () => {
    person.setmessage();
    console.log(person, person.count, person.message);
    setPerson({ ...person }); // you ALWAY ALWAYS have to spread your object
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      {/* <h3>{person.count}</h3> */}

      <button className="btn" onClick={handler}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
