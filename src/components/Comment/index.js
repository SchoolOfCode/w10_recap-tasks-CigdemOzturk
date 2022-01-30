import React from "react";
import css from "./Comment.module.css";

function Comment({ article }) {
  return article.comments.map((comment, index) => {
    return (
      <div key={index}>
        <h4 className={css.header}>
          {comment.name} {" says: "}
        </h4>
        <p className={css.paragraph}>{comment.text}</p>
      </div>
    );
  });
}

export default Comment;
