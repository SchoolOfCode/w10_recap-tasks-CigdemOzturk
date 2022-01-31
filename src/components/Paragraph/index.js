import React from "react";
import css from "./Paragraph.module.css";

function Paragraph({ article }) {
  return article.paragraphs.map((paragraph, index) => {
    return (
      <p className={css.paragraph} key={index}>
        {paragraph.text}
      </p>
    );
  });
}

export default Paragraph;
