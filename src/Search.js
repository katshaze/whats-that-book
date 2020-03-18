import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Search = () => {
  const [searchResults, setSearchResults] = useState(["initial render"]);
  const [book, updateBook] = useState("Kafka on the Shore");

  async function requestSearch() {
    let response = await axios.post(`http://localhost:3000/book`, {
      book
    });
    console.log(response.data[0].work);
    response = response.data[0].work;
    setSearchResults(response || []);
  }

  return (
    <div className="container">
      <div className="search">
        <h2>What's that book?</h2>
        <div className="searchBox">
          <form
            onSubmit={e => {
              e.preventDefault();
              requestSearch();
            }}
          >
            <input
              type="text"
              value={book}
              onChange={e => updateBook(e.target.value)}
            />
            <button className={"button button--search"}>Search</button>
          </form>
        </div>
      </div>
      <Results searchResults={searchResults} />
    </div>
  );
};

export default Search;
