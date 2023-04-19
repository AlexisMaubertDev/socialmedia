import styles from "./Response.module.css";
import { useState } from "react";
import users from "../../Users.json";
import { AddComment } from "../AddComment/AddComment";

export function Response({ response, comment, show}) {
  const userloged = "u001";
  const [like, setLike] = useState(response.likes);

  const showUser = (id) => {
    const user = users.find((u) => u.id === id);
    return user.name + " " + user.lastName;
  };

  const showProfilePic = (id) => {
    const user = users.find((u) => u.id === id);
    return user.profilePic;
  };
  const handleLike = () => {
    if (like.includes(userloged)) {
      setLike((current) => current.filter((item) => item !== userloged));
    } else {
      setLike([...like, userloged]);
    }
  };

  return (
    <>
      <div className={show ? styles.showResponse + " " + styles.responseContainer : styles.responseContainer }>
        <div
          className={styles.userPic}
          style={{
            backgroundImage: showProfilePic(response.userid),
          }}
        ></div>
        <div className={styles.responseUser}>
          {showUser(response.userid)}
          <div className={styles.response}>{response.text}</div>
          <div className={styles.responseBottomContainer}>
            <p className={styles.countLikes}>{like.length} Likes</p>
            <ul className={styles.reaccionesResponse}>
              <li>
                <p onClick={() => handleLike()}>
                  {like.includes(userloged) ? "Dislike" : "Like"}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
