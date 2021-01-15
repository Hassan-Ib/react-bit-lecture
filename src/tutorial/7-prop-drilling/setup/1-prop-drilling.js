import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <section>
        <h3>prop drilling</h3>
        <List removePersonOnclick={removePerson} people={people} />
      </section>
    </>
  );
};

const List = ({ people, removePersonOnclick }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Person
            {...person}
            removePersonOnclick={removePersonOnclick}
            key={person.id}
          />
        );
      })}
    </>
  );
};

const Person = ({ id, name, removePersonOnclick }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          removePersonOnclick(id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
