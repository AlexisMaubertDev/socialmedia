import styles from "../RightPanel/RightPanel.module.css";
import users from "../../Users.json";
import { useState } from "react";

export function SuggestedUsers({ user }) {
  const [followed, setFollowed] = useState(false);
  const userLoged = "u001";

  const handleClick = (userId) => {
    const user = users.find((u) => u.id === userLoged);
    user.following.push(userId);
    setFollowed(true)
  };

  return (
    <li>
      <a href="" className={styles.containerUser}>
        <div
          className={styles.profilePic}
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/3135/3135768.png')",
          }}
        ></div>
        <p>{user.name + " " + user.lastName}</p>
      </a>
      {followed ? (
        <div className={styles.followed}> Followed </div>
      ) : (
        <div onClick={() => handleClick(user.id)} className={styles.follow}>
          Follow
        </div>
      )}
    </li>
  );
}
