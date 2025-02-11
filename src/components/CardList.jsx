import Card from "./Card";
import "./Card.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";


const CardList = () => {
  return (
    <div className="cards">
      <Card
        image={image1}
        title="Kendrick Lamar Halftime"
        description="Relive the Super Bowl LIX Halftime Show."
      />
      <Card
        image={image2}
        title="Kendrick's Road"
        description="Catch up on his journey to the Super Bowl."
      />
      <Card
        image={image3}
        title="Winter Warmers"
        description="It's cold out there, but these picks will keep you warm all winter."
      />
      <Card
        image={image4}
        title="Pure Focus"
        description="Zone in with this mix of immersive, mostly electronic sounds."
      />
    </div>
  );
};

export default CardList;
