import React from "react";
import { Bar } from "react-chartjs-2";
import { Col, Row, Button } from "react-bootstrap";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const Result = ({ score, playAgain, total }) => {
  const incorrect = total - score;
  const state = {
    labels: ["Correct", "InCorrect"],
    datasets: [
      {
        label: "Chart",
        backgroundColor: ["rgba(75,192,192,1)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(0,0,0,1)", "rgba(0,0,0,1)"],
        borderWidth: 2,
        data: [score, incorrect],
      },
    ],
  };
  return (
    <div className="score-board">
      <Row>
        Your score is {score} / {total} correct answer ! ! !
      </Row>
      <Row>
        <Bar
          data={state}
          width={800}
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
      </Row>
      <Button variant="primary" className="playBtn" onClick={playAgain}>
        Play Again
      </Button>
    </div>
  );
};

export default Result;
