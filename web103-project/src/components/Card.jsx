import React from 'react';
import PropTypes from 'prop-types';
import './card.css'; 

const Card = ({ name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={`${name}'s image`} className="card-image" />}
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-url">{url}</a>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string
};

export default Card;
