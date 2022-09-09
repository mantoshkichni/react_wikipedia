import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.scss";

const Home = () => {
  const [search, setSearch] = useState();
  const [wikipediadata, setwikipediadata] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&srlimit=30&list=search&srsearch=${search}&format=json&origin=*`
    );
    setwikipediadata(data.data);
    console.log(data.data);
  };

  return (
    <div className="container">
      <div className="upperSection">
        <form onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            placeholder="whats on your mind..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <h1>Result:{wikipediadata?.query?.searchinfo.totalhits}</h1>
      <Card wikipediadata={wikipediadata} />
      {/* <div className="lowersection">
        <div className="result">
          <h1>Lorem ipsom</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <button>Read More</button>
        </div>
        
      </div> */}
    </div>
  );
};
export default Home;
