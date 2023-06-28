import "./HeroCard.scss";
import { FaCircle } from "react-icons/fa";

const HeroCard = () => {
  return (
    <div className="hero-card-container">
      <div>
        <h1 className="hero-card-title">
          Frontend Developer<FaCircle className="circle"></FaCircle>
        </h1>
        <p className="hero-card-description">
          I like to craft solid and scalable frontend products with great user
          experiences.
        </p>
      </div>
      <div className="hero-card-additional-description-container">
        <p>
          Highly skilled at progressive enhancement, design systems & UI
          Engineering.
        </p>
        <p>
          Proven experience building successful products for clients acorss
          several countries.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
