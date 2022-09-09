import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { pageid } = useParams();
  return <div>{pageid}</div>;
};
export default SinglePage;
