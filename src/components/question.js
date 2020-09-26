import { faFrown, faLaugh, faMeh, faSmile, faTired } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/question.module.css";

export const Question = ({ question, info, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    onSelect(index);
  }

  return (
    <Form.Group>
      <Form.Label>{question}</Form.Label>
      <div className="d-flex mt-2 justify-content-around">
        <FontAwesomeIcon className={selected === 1 ? styles.selected : ""} onClick={() => handleSelect(1)} icon={faTired} size="lg"/>
        <FontAwesomeIcon className={selected === 2 ? styles.selected : ""} onClick={() => handleSelect(2)} icon={faFrown} size="lg"/>
        <FontAwesomeIcon className={selected === 3 ? styles.selected : ""} onClick={() => handleSelect(3)} icon={faMeh} size="lg"/>
        <FontAwesomeIcon className={selected === 4 ? styles.selected : ""} onClick={() => handleSelect(4)} icon={faSmile} size="lg"/>
        <FontAwesomeIcon className={selected === 5 ? styles.selected : ""} onClick={() => handleSelect(5)} icon={faLaugh} size="lg"/>
      </div>
    </Form.Group>
  );
};
