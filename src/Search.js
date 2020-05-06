import React, { useState } from "react";
import axios from "axios";
import { Router, navigate } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

const Search = () => {
  const [searchResults, setSearchResults] = useState(['loading']);
  const [initialPageLoad, setInitialPageLoad] = useState(true);
  const [book, updateBook] = useState("Kafka on the Shore");

  async function requestSearch() {
    setInitialPageLoad(false);
    let response = await axios.post(`http://localhost:3000/book`, {
      book,
    });

    response = response.data[0].work;
    setSearchResults(response || []);
    navigate("/");
  }

  return (
    <div className="container">
      <form
        className={`search ${initialPageLoad && 'search--initial'}`}
        onSubmit={(e) => {
          e.preventDefault();
          requestSearch();
        }}
      >
        <h2 className="search--heading">What's that book?</h2>
        <input className="search--input"
          type="text"
          value={book}
          onChange={(e) => updateBook(e.target.value)}
        />
        <button className={"button search--button"}>Search</button>
      </form>
      <Router>
        <Results initialPageLoad={initialPageLoad} searchResults={searchResults} path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
};

export default Search;
