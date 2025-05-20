import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto mt-10 flex flex-wrap justify-center">
      {users.map((user) => (
        <div key={user.login.uuid} className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 m-4 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500">
          <img src={user.picture.large} alt={user.name.first} className="w-24 h-24 rounded-full mx-auto border-4 border-white"/>
          <h2 className="text-center text-white text-2xl mt-4 font-semibold">{user.name.first} {user.name.last}</h2>
          <p className="text-center text-gray-300">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;