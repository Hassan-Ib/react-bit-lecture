import React, { useState, useEffect } from "react";

const getUser = async (url, setUsers) => {
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      throw new Error(res.ok);
    }

    const data = await res.json();

    setUsers(data);

    console.log(res, data);
  } catch (error) {
    console.log(error);
  }
};

const url = "https://api.github.com/users";

const Person = ({ props }) => {
  return (
    <li>
      <img src={props.avatar} alt={props.login} />
      <div>
        <h4>{props.login}</h4>
        <a href={props.html}>Profile</a>
      </div>
    </li>
  );
};
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(0);
  useEffect(() => {
    getUser(url, setUsers);
    if (1 < 2) {
      setUser(user + 1);
    }
    // setUsers(users + 1);
    // setUser(user + 3);
  }, []);

  return (
    <>
      <h3>
        github users {users.length} {user}
      </h3>
      <ul className="users">
        {users.map((user) => {
          let data = {
            avatar: user.avatar_url,
            id: user.id,
            login: user.login,
            html: user.html_url,
          };
          // let { avatar_url: avatar, id, login, html_url: html } = user;

          return (
            <Person key={data.id} props={data} />
            // <li key={id}>
            //   <img src={avatar} alt={login} />
            //   <div>
            //     <h4>{login}</h4>
            //     <a href={html}>Profile</a>
            //   </div>
            // </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
