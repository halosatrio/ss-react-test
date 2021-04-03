import { useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  // const handleClick = (n) => {
  //   const elements = document.querySelectorAll("span");
  //   console.log(elements);
  //   clicked
  //     ? elements[n].classList.remove("active")
  //     : elements[n].classList.add("active");
  //   setClicked(!clicked);
  // };

  const elements = document.querySelectorAll("span");
  console.log(elements);

  return (
    <div className="App">
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      {/* <span onClick={handleClick(0)}>*</span>
      <span onClick={handleClick(1)}>*</span> */}
    </div>
  );
}

export default App;
