import React from "react";

const Details = props => {
  const {
    title,
    author,
    small_image_url,
    publication_year,
    description,
    average_rating,
    ratings_count,
    url,
    publisher
  } = props.location.state;

  return (
    <div className="details">
      <h1>
        <a href={url}>{title}</a>
      </h1>
      <h2>By {author}</h2>

      <div className="detailsHeader">
        <img src={small_image_url} alt={title} href={url} />
        <div className="detailsHeader__text">
          <p>{publication_year}</p>
          <p>{publisher}</p>
          <p>
            Rated {average_rating} (out of {ratings_count} reviews)
          </p>
        </div>
      </div>
      <div
        className="detailsDescription"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default Details;
