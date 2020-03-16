import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const BookSearch = () => {
  const [searchResults, setSearchResults] = useState(['initial render']);
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
    <div className="book">
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
            className="input--book"
          />
          <button className={"button button--book"}>Search</button>
        </form>
        <Results searchResults={searchResults} />
      </div>
    </div>
  );
};

export default BookSearch;
