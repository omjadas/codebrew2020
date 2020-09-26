import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ArticleList } from "./articleList";

const categories = [
  "about",
  "school",
  "socialisation",
  "behaviour",
  "health",
  "family",
  "support",
  "contact",
];

export const Articles = () => {
  return (
    <>
      {
        categories.map(c => (
          <div key={c} className="mt-3">
            <ArticleList category={c} />
          </div>
        ))
      }
      <br></br>

      <Link to="/article">
        <div className="text-center">
          <Button className="ml-auto mb-2 mr-2">
            Create Article
          </Button>
        </div>
      </Link>
    </>
  );
};
