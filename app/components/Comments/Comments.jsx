import { AddComment } from "../AddComment/AddComment";
import styles from "../CommentModal/CommentModal.module.css";
import { useState } from "react";
import { Response } from "../Response/Response";

export function Comments({ comment }) {
  const userloged = "u001";
  const [like, setLike] = useState(comment.likes);
  const [show, setShow] = useState(false);
  const [lookChanges, setLookChanges] = useState(comment.responses.length);

  const handleLike = () => {
    if (like.includes(userloged)) {
      setLike((current) => current.filter((item) => item !== userloged));
    } else {
      setLike([...like, userloged]);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  const onChange = () => {
    setLookChanges(comment.responses.length);
  }

  return (
    <>
      <div className={styles.commentText}>{comment.text}</div>
      <div className={styles.bottomContainer}>
        <p className={styles.countLikes}>{like.length} Likes</p>
        <ul className={styles.reaccionesComments}>
          <li>
            <p onClick={() => handleLike()}>
              {like.includes(userloged) ? "Dislike" : "Like"}
            </p>
          </li>
          <li>
            <p onClick={handleShow}>{show ? "Answers ▲" : "Answers ▼"}</p>
          </li>
        </ul>
      </div>
      {comment.responses.map((response) => {
        return <Response response={response} key={response.id} show={show} />;
      })}
      <AddComment comment={comment} show={show} onChange={onChange} />
    </>
  );
}
