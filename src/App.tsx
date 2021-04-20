import React from "react";
import "./App.css";

function App() {
  const names = ["Dimych", "Sveta", "Katya", "Viktor", "Ignat"];
  const users = [
    { name: "Dimych" },
    { name: "Sveta" },
    { name: "Katya" },
    { name: "Viktor" },
    { name: "Ignat" },
  ];
  const liElements = users.map((u, i) => <li key={i}>{u.name}</li>);
  return (
    <div className="App">
      <ul>{liElements}</ul>
    </div>
  );
}

export default App;
