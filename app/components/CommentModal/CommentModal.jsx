import styles from "./CommentModal.module.css";
import users from "../../Users.json";
import { useState } from "react";
import { Comments } from "../Comments/Comments";
import { Response } from "../Response/Response";

export function CommentModal({ comments, show, closeModal }) {
  const userloged = "u001";
  const [like, setLike] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const showUser = (id) => {
    const user = users.find((u) => u.id === id);
    return user.name + " " + user.lastName;
  };

  const showProfilePic = (id) => {
    const user = users.find((u) => u.id === id);
    return user.profilePic;
  };

  const handleClick = () => {
    if (currentComment !== "") {
      comments.push({
        id: "c003",
        userid: userloged,
        text: currentComment,
        likes: [],
        responses: [],
      });
      setCurrentComment("");
    }
  };
  return (
    <div
      className={
        show ? styles.modalVisible + " " + styles.container : styles.container
      }
    >
      <div className={styles.modalComment}>
        <div className={styles.containerCloseButton}>
          <div className={styles.closeButton} onClick={closeModal}>
            X
          </div>
        </div>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.id} className={styles.listContainer}>
                <div className={styles.commentContainer}>
                  <div
                    className={styles.userPic}
                    style={{
                      backgroundImage: showProfilePic(comment.userid),
                    }}
                  ></div>
                  <div className={styles.commentUser}>
                    {showUser(comment.userid)}
                    <Comments comment={comment} />
                  </div>
                </div>
                {comment.responses.map((response) => {
                  return <Response response={response} key={response.id} />;
                })}
              </li>
            );
          })}
          <li className={styles.inputComment}>
            <input
              type="text"
              value={currentComment}
              required
              onChange={(e) => setCurrentComment(e.target.value)}
            />

            <input type="submit" value="Comment" onClick={handleClick} />
          </li>
        </ul>
      </div>
    </div>
  );
}
