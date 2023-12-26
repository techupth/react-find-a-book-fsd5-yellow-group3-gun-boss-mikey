import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchBook, setSearchBook] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
    );
    console.log(response);
    setSearchResult(response.data.items);
  };
  useEffect(() => {
    if (searchBook !== "") {
      handleSearch();
    }
  }, [searchBook]);

  return (
    <div className="App">
      <div>Find a Book</div>
      <input
        className="inputText"
        type="text"
        value={searchBook}
        onChange={(event) => {
          setSearchBook(event.target.value);
        }}
      />

      <div>
        <ul>
          {searchResult.map((book, index) => {
            return <li key={index}>{book.volumeInfo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
