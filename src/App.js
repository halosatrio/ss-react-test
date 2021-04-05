import { useState } from "react";
import "./App.css";
// import Star from "./Star";
import List from "./List";

function App() {
  // const [starsSelected, setStarsSelected] = useState(0);
  // const totalStars = 5;

  // const handleChange = (starsSelected) => {
  //   setStarsSelected(starsSelected);
  // };

  return (
    <>
      {/* <div className="App">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => handleChange(i + 1)}
          />
        ))}
      </div> */}
      <br />
      <br />
      <div className="test2">
        <List />
      </div>
    </>
  );
}

export default App;
