import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          console.log(resp);
          return resp.json();
        } else {
          console.log(resp);
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isloading) {
    return (
      <>
        <h2>loading...</h2>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
