import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const RandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  console.log(name);
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => {
              if (index === 0) {
                setIndex(people.length - 1);
              } else {
                setIndex(index - 1);
              }
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (index === people.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={RandomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
