import React from "react";
import Paragraph from "../Paragraph";
import Comment from "../Comment";
import css from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={css.post}>
      <h2>{article.title}</h2>
      <Paragraph article={article}></Paragraph>
      <button className={css.likeButton}>Like 👍</button>
      <section className={css.commentSection}>
        <Comment article={article}></Comment>
      </section>
    </div>
  );
}

export default Article;
