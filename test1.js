class Rating extends React.Component {
  render() {
    function handleClick(n) {
      const span = document.querySelectorAll("span");
      span.classList.add("mystyle");
    }

    return (
      <div id="rating">
        <span onClick>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Rating />, rootElement);

document.querySelectorAll("span")[2].click();
console.log(document.getElementById("rating").outerHTML);

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <span className={selected ? "active" : ""} onClick={onClick}>
    *
  </span>
);

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starsSelected: 0 };
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({ starsSelected: starsSelected });
  }

  render() {
    const { totalStars } = 5;
    const { starsSelected } = this.state;

    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
