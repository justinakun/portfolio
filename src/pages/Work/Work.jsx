import "./Work.scss";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { WORK_ROUTE } from "../../routes/const";

const Work = () => {
  const cards = [
    {
      id: 1,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtN3wSOQ-0krDfeVmCQiJt4f5fT8Sy7KsBA&usqp=CAU",
      title: "HTML & CSS project 1",
    },
    {
      id: 2,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtN3wSOQ-0krDfeVmCQiJt4f5fT8Sy7KsBA&usqp=CAU",
      title: "HTML & CSS project 2",
    },
    {
      id: 3,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtN3wSOQ-0krDfeVmCQiJt4f5fT8Sy7KsBA&usqp=CAU",
      title: "HTML & CSS project 3",
    },
  ];

  console.log(cards[1].imageURL);

  return (
    <div className="work-container">
      <div className="work-intro">
        <h1 className="work-intro-title">/work.</h1>
        <p className="work-intro-description">
          Selected work I've taken on in the past
        </p>
      </div>
      <div className="all-cards-container">
        {cards.map((card) => (
          <Link key={card.id} to={`${WORK_ROUTE}/${card.id}`}>
            <Card imageURL={card.imageURL} title={card.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
