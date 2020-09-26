import React from "react";
import { Card } from "react-bootstrap";
import styles from "../styles/article.module.css";

export const Article = ({ article }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={article.url}>
      <Card className={`ml-3 ${styles.article}`}>
        <Card.Img variant="top" src={article.image} className={styles.image} />
        <Card.Body>
          <Card.Title>{article.name}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};
