import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
// import Button from "./Button";
import { useState } from "react";
import Add from "./Add";
import List from "./List";


function App() {
  let arr = [];
  const [data, setData] = useState(arr);
  // console.log(localStorage)

  for (let i = 0; i < localStorage.length; i++) {
    let x = localStorage.getItem(localStorage.key(i));
    let parsed = JSON.parse(x);
    arr.push(parsed);
  }

  return (
    <>
      <div className="items">
        <Cards data={arr} />
        <Add />
        <List data={arr} />
      </div>
    </>
  );
}

export default App;
