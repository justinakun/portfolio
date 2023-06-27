import "./Card.scss";
import PropTypes from "prop-types";

const Card = ({ imageURL, title }) => {
  return (
    <div className="single-card-container">
      <div className="image-container">
        <img src={imageURL} alt={title} className="the-logo" />
      </div>
      <div className="description-container">
        <h2 className="description-container-text">{title}</h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //   link: PropTypes.string,
};

export default Card;
