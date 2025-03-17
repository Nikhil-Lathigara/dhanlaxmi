import React from "react";

const gameRates = [
  { title: "Single Digit", rate: "1 RS KA 9.5 Rs" },
  { title: "Single Pana", rate: "1 RS KA 150 Rs" },
  { title: "Half Sangam A", rate: "1 RS KA 1000 Rs" },
  { title: "Jodi Digits", rate: "1 RS KA 95 Rs" },
  { title: "Double Pana", rate: "1 RS KA 300 Rs" },
  { title: "Half Sangam B", rate: "1 RS KA 1000 Rs" },
  { title: "Red Brackets", rate: "1 RS KA 95 Rs" },
  { title: "Triple Pana", rate: "1 RS KA 900 Rs" },
  { title: "Full Sangam", rate: "1 RS KA 10000 Rs" },
];

const GameRates = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 font-bold text-2xl">Game Rates</h2>
      <div className="row text-center">
        {gameRates.map((game, index) => (
          <div className="col-6 col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body border border-warning rounded">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameRates;