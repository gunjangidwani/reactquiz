import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

// Function to question inside our app
const Questions = ({
  question,
  options,
  selected,
  id,
  answerObject,
  hasError,
}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <Container>
      <Form.Group as={Row}>
        <Form.Label className={`${hasError ? "error" : ""}`} as="legend">
          {question}
        </Form.Label>

        {answer.map((text, index) => (
          <Form.Check
            type="radio"
            label={text}
            name={text}
            id={index}
            checked={answerObject[id] === text}
            onChange={() => {
              selected(text, id);
            }}
          />
        ))}
      </Form.Group>
      <br></br>
    </Container>
  );
};

export default Questions;
