import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Book = ({ name, author, image, bookId }) => {
  let hero = "http://placecorgi.com/300/300";
  if (image) {
    hero = image;
  }

  async function requestBookDetails() {
    let response = await axios.post("http://localhost:3000/book/details", {
      bookId,
    });
    response = response.data;
    console.log(response);

    const {
      title,
      image_url,
      publication_year,
      description,
      average_rating,
      ratings_count,
      url,
      publisher,
    } = response;

    navigate(`/details/${bookId}`, {
      state: {
        title,
        image_url,
        publication_year,
        description,
        average_rating,
        ratings_count,
        url,
        publisher,
        author,
      },
    });
  }

  return (
    <div className="book">
      <div className="imageContainer">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={hero}
          alt={name}
          onClick={(e) => {
            e.preventDefault();
            requestBookDetails();
          }}
          onKeyPress={(e) => {
            e.preventDefault();
            requestBookDetails();
          }}
        />
      </div>
      <div className="info">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <h4
          onClick={(e) => {
            e.preventDefault();
            requestBookDetails();
          }}
          onKeyPress={(e) => {
            e.preventDefault();
            requestBookDetails();
          }}
        >
          {name}
        </h4>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Book;
