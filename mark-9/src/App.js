import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const allBinge = {
    Home: [
      {
        name: "Please choose your favorite category of Entertainment",
        ratings: "Enjoy!!"
      }
    ],
    "Bollywood movies": [
      {
        name: "Sholay",
        ratings: "5 ratings"
      },
      {
        name: "Go goa gone",
        ratings: "4 ratings"
      },
      {
        name: "Tare zameen par",
        ratings: "5 ratings"
      },
      {
        name: "Badri ki Dulhaniya",
        ratings: "3.5 ratings"
      }
    ],
    "Hollywood movies": [
      {
        name: "Titanic",
        ratings: "5 ratings"
      },
      {
        name: "Jumanji",
        ratings: "4 ratings"
      },
      {
        name: "Kong: skull island",
        ratings: "4 ratings"
      },
      {
        name: "Slumdog millionare",
        ratings: "5 ratings"
      }
    ],
    Webseries: [
      {
        name: "Dark",
        ratings: "5 ratings"
      },
      {
        name: "Mirzapur",
        ratings: "4 ratings"
      },
      {
        name: "Sacred games",
        ratings: "4 ratings"
      },
      {
        name: "Lucifer",
        ratings: "5 ratings"
      }
    ]
  };
  const [generatedMovie, setGeneratedMovie] = useState("Home");
  const arrGenerator = Object.keys(allBinge);
  function genreClickHandler(type) {
    setGeneratedMovie(type);
  }
  return (
    <div className="App">
      <nav>
        {" "}
        <h1>Binge Center</h1>{" "}
      </nav>
      <label>
        <h3>Select your category</h3>
        {arrGenerator.map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </label>
      <label>
        <ul>
          {allBinge[generatedMovie].map((content) => (
            <li key={content.name}>
              <div className="last">
                <label>{content.name}</label>
                <hr />
                <label>{content.ratings}</label>
              </div>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </label>
      <footer>
        <p>Enjoy binge watching this shows!!</p>
        <div>These are my social handles feel free to connect</div>
        <ul className="display">
          <li className="foot-link">
            <a href="https://github.com/psychoactiv" alt="github">
              <strong>Github</strong>
            </a>
          </li>
          <li className="foot-link">
            <a
              href="https://twitter.com/speghettiScript?t=Um97FEQuUauZ871X5T8Zag&s=08"
              alt="twitter"
            >
              <strong>Twitter</strong>
            </a>
          </li>
          <li className="foot-link">
            <a
              href="https://www.linkedin.com/in/pritam-majumdar-31a229183"
              alt=""
            >
              <strong>LinkedIn</strong>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
