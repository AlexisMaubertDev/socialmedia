import styles from "./CommentModal.module.css";
import users from "../../Users.json";
import { useState } from "react";
import { Comments } from "../Comments/Comments";

export function CommentModal({ comments, show, closeModal }) {
  const userloged = "u002";
  const [like, setLike] = useState([]);

  const showUser = (id) => {
    const user = users.find((u) => u.id === id);
    return user.name + " " + user.lastName;
  };

  const showProfilePic = (id) => {
    const user = users.find((u) => u.id === id);
    return user.profilePic;
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
                    {/* <div className={styles.commentText}>{comment.text}</div>

                     <div className={styles.bottomContainer}>
                      <p className={styles.countLikes}>{like.length} Likes</p>
                      <ul className={styles.reaccionesComments}>
                        <li>
                         <p 
              //               onLoad={() => setLike(comment.likes)}
              //               onClick={() => handleLike()}
              //             >
              //               Like
              //             </p>
              //             {console.log(like)}
              //           </li>
              //           <li>
              //             <p>Answer</p>
              //           </li>
              //         </ul>
              //       </div>*/}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
