import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  // useParams return a object will get the parameter passed at the Link;
  const { id } = useParams();
  const [name, setName] = useState("default name");
  const getData = () => {
    const value = data.find((person) => person.id === parseInt(id));
    setName(value.name);
  };
  console.log(name);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{data.find((person) => person.id === parseInt(id)).name}</h2>
      <Link to="/people" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
