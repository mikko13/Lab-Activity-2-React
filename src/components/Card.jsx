import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.isFeatured ? "featured" : ""}`}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
