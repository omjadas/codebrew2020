import { faFrown, faLaugh, faMeh, faSmile, faTired } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Form, Overlay, Tooltip } from "react-bootstrap";
import styles from "../styles/question.module.css";

export const Question = ({ question, info, onSelect, value }) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect( () => {
    if (value !== undefined) {
      setSelected(value)
    }
  }, [])
   

  const handleSelect = (index) => {
    setSelected(index);
    onSelect(index);
  }

  return (
    <Form.Group>
      <Form.Label ref={target} onClick={() => setShow(!show)}>{question}</Form.Label>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip {...props}>
            {info}
          </Tooltip>
        )}
      </Overlay>
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
