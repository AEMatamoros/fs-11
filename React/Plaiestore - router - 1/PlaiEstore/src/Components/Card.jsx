import { FaStar } from "react-icons/fa";
// import App1IMG from "../assets/img/app1.webp";
import { createContext, useContext } from "react";

const cardDataContext = createContext({});

export default function Card({
  app,
  handleshowModal,
  setCurrentApp,
  children,
}) {
  const handleModalOpen = (app) => {
    setCurrentApp(app);
    handleshowModal();
  };
  return (
    <a
      className="col-3 a-none mb-3"
      onClick={() => {
        handleModalOpen(app);
      }}
    >
      <cardDataContext.Provider
        value={{
          img: app.img,
          name: app.name,
          description: app.description,
          price: app.price,
          rating: app.rating,
        }}
      >
        <div className="card pointer" style={{ maxWidth: "540px" }}>
          {children}
        </div>
      </cardDataContext.Provider>
    </a>
  );
}

export function CardIMG() {
  let { img } = useContext(cardDataContext);
  return <img src={img} className="card-img-top" alt="..." />;
}

export function CardBody() {
  let { name, description, price, rating } = useContext(cardDataContext);
  let ratingArray = Array.from(Array(rating));

  return (
    <div className="card-body p-4">
      <h5 className="card-title text-black">{name}</h5>
      <p className="card-text text-secondary">{description}</p>
      <strong href="#" className="view right-4 text-success">
        {price}$
      </strong>
      <span className="rating">
        {!!ratingArray &&
          ratingArray.length > 0 &&
          ratingArray.map((_, index) => (
            <FaStar className="text-warning" key={index}></FaStar>
          ))}
      </span>
    </div>
  );
}

Card.CardBody = CardBody;
Card.CardIMG = CardIMG;
