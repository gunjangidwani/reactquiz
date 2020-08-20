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
      <Form.Group>
        <Form.Label className={`${hasError ? "error" : ""}`} column as="legend">
          {question}
        </Form.Label>

        <Col>
          {answer.map((text, index) => (
            <Form.Check
              type="radio"
              label={text}
              name={text}
              id={index}
              key={index}
              checked={answerObject[id] === text}
              onChange={() => {
                selected(text, id);
              }}
            />
          ))}
        </Col>
      </Form.Group>
      <br></br>
    </Container>
  );
};

export default Questions;
