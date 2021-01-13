import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: "",
// };
const Index = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { name, id: new Date().getTime().toString() };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal
          closeModal={closeModal}
          modalContent={state.modalContent}
          isModalOpen={state.isModalOpen}
        />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { ...person } })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
