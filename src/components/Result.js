import React from "react";
import { Bar } from "react-chartjs-2";
import { Col, Row, Button } from "react-bootstrap";

const Result = ({ score, playAgain, total }) => {
  const state = {
    labels: ["Correct", "InCorrect"],
    datasets: [
      {
        label: "Chart",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [score, total - score],
      },
    ],
  };
  return (
    <div className="score-board">
      <div className="score">
        Your score is {score} / {total} correct answer ! ! !
      </div>
      <div>
        <Bar
          data={state}
          width={500}
          height={500}
          options={{
            title: {
              display: true,
              text: "Score Analysis",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <Button variant="primary" className="playBtn" onClick={playAgain}>
        Play Again
      </Button>
    </div>
  );
};

export default Result;
