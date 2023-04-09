import styles from "../CommentModal/CommentModal.module.css";
import { useState } from "react";
import alfaUsers from "../../Users.json";

export function Comments({ comment }) {

  const userloged = "u001";
  const [like, setLike] = useState(comment.likes);

  const handleLike = () => {
    if (like.includes(userloged)) {
      setLike((current) => current.filter((item) => item !== userloged));
      console.log(like);
    } else {
      setLike([...like, userloged]);
      console.log(like);
    }
  };

  return (
    <>
      <div className={styles.commentText}>{comment.text}</div>

      <div className={styles.bottomContainer}>
        <p className={styles.countLikes}>{like.length} Likes</p>
        <ul className={styles.reaccionesComments}>
          <li>
            <p
              onClick={() => handleLike()}
            >
              {like.includes(userloged) ? "Dislike" : "Like"}
            </p>
          </li>
          <li>
            <p>Answer</p>
          </li>
        </ul>
      </div>
    </>
  );
}