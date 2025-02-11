/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
