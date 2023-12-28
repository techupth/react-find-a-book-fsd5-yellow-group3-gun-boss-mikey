import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText) {
      searchFromServer(searchText);
    }
  }, [searchText]);

  const searchFromServer = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=/${searchText}`
    );
    setData(response.data.items || []);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>

      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <ul>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.volumeInfo.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
