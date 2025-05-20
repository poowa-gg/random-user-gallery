import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./output.css";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <UserList />
    </div>
  );
}

export default App;