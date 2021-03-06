import React, { useState } from "react";
import axios from "axios";
import { Link, Router, navigate } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

const Search = () => {
  const [searchResults, setSearchResults] = useState(['loading']);
  const [initialPageLoad, setInitialPageLoad] = useState(true);
  const [book, updateBook] = useState("Kafka on the Shore");

  async function requestSearch() {
    setInitialPageLoad(false);
    
    let response = await axios.post(`${process.env.API_URL}/book`, {
      book,
    });

    if (response) {
      response = response.data[0].work;
    }
    
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
        <Link to="/"><h2 className="search--heading">What's that book?</h2></Link>
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
