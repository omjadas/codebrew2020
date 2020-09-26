import React from "react";
import { ListGroup } from "react-bootstrap";

export const Patient = ({ name, email }) => {
  return (
    <ListGroup.Item onClick={() => {
      localStorage.setItem('userEmail', email);
      window.location.href = "/tracker";
    }}>{name}</ListGroup.Item>
  )
};