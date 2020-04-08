import React, { useState } from "react";
import axios from "axios";
import { Router, navigate } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [book, updateBook] = useState("Kafka on the Shore");

  async function requestSearch() {
    let response = await axios.post(`http://localhost:3000/book`, {
      book
    });
    
    response = response.data[0].work;
    setSearchResults(response || []);
    navigate("/");
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
      <Router>
        <Results searchResults={searchResults} path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
};

export default Search;
