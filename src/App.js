import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
