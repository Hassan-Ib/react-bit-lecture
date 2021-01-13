// import React, {useState} from 'react';
import React from "react"; 
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)// data not affected at all
  // handler for hooks
  const handler = () => {
    if (people.length < 3)
    setPeople([]) // basically recreates useState but with new input data
  };

  // handers for removeBTN
  const removeItem = (id) => {
    let newPeople = people.filter(el => el.id !== id); //basically creating new arr to be use ass people 
    setPeople(newPeople); // this yeild useState(newPeople) and destructured as [people, setPeople]
    console.log(people); // note we are creating new arr not destroying any //people === newPeople
  };

  return (
    <>
    {
      people.map(el => {
        const { id, name} = el
        
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button  onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })
    }
      <button className="btn" onClick={handler}>Clear Items</button>
    </>
  );
};

export default UseStateArray;
