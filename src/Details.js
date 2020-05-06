import React from "react";

const Details = (props) => {
  const {
    title,
    author,
    image_url,
    description,
    average_rating,
    ratings_count,
    url,
  } = props.location.state;

  return (
    <div className="details">
      <div className="detailsHeader">
        <div className="imageContainer">
        <img src={image_url} alt={title} href={url} />
        </div>
        <div className="detailsHeader__text">
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <h4>by {author}</h4>
          <p className="ratingInfo">
            Rated <span className="rating">{average_rating}</span> (out of {ratings_count} reviews)
          </p>
        </div>
      </div>
      <div
        className="detailsDescription"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className="goodreads"><a href={url}>View on Goodreads</a></div>
    </div>
  );
};

export default Details;
