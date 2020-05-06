import React from "react";
import Book from "./Book";

const Results = ({ initialPageLoad, searchResults }) => {

  return (
    <div className="results">
      {!initialPageLoad ? (
        searchResults.length === 0 ? (
          <h3>No books found that match your search, sorry. Try again?</h3>
        ) : searchResults.length === 1 && searchResults[0] === "loading" ? (
          <h3>Searching...</h3>
        ) : (
          searchResults.map((result) => (
            <Book
              key={result.best_book[0].id[0]._}
              bookId={result.best_book[0].id[0]._}
              name={result.best_book[0].title[0]}
              author={result.best_book[0].author[0].name[0]}
              image={result.best_book[0].image_url[0]}
            />
          ))
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Results;
