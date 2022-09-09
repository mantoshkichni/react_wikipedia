import { Link } from "react-router-dom";
import "./styles.scss";
const Card = ({ wikipediadata }) => {
  return (
    <div className="lowersection">
      {wikipediadata?.query?.search.map((item) => (
        <div className="result">
          <h1>{item.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
          <a
            href={`https://en.wikipedia.org/?curid=${item.pageid}`}
            className="button"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};
export default Card;
