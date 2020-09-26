import React, { useContext, useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { FirebaseContext } from "../utils/firebase";
import { Article } from "./article";

const categories = {
  about: "About Autism",
  school: "School",
  socialisation: "Socialisation and Communication",
  behaviour: "Behaviour",
  health: "Your Child's Health",
  family: "Family and Carers",
  support: "Support",
  books: "Books",
  contact: "Get in Contact",
};

export const ArticleList = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.firestore
      .collection("articles").where("category", "==", category).get()
      .then(querySnapshot => {
        const resultArticles = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
          resultArticles.push(data);
        });

        setArticles(resultArticles);
      })
      .catch(e => {
        console.error(e);
      })
  }, [firebase.firestore, category]);

  return (
    <>
      <h4 className="ml-3">{categories[category]}</h4>
      <ScrollMenu
        data={articles.map(article => (
          <Article key={article.name} article={article} />
        ))}/>
    </>
  );
};
