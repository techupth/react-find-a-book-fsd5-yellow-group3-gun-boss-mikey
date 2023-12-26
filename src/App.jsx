import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  console.log("fetch data :", data);

  const fetchFromGoggle = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputText}`
    );
    console.log(result);
    setData(result.data.items);
  };

  const listElement = data.map((list) => (
    <li key={list.id}>
      <a href={list.volumeInfo.infoLink} target="_blank">
        {list.volumeInfo.title}
      </a>
    </li>
  ));

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={fetchFromGoggle}>Search</button>
      <ul>{listElement}</ul>
    </div>
  );
}

export default App;
