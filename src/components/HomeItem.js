import React from 'react';
import PropTypes from 'prop-types';

const HomeItem = (props) => {
  const { title, image } = props;
  HomeItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <div className="item-container" data-testid="homeitem">
      <div className="item">
        <img className="image-item" src={image} alt="game" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default HomeItem;
