"use client";
import styles from "./RightPanel.module.css";
import users from "../../Users.json";
import { SuggestedUsers } from "../SuggestedUsers/SuggestedUsers";

export function RightPanel() {
  const userLoged = "u001";

  const renderSuggestion = () => {
    const user = users.find((u) => u.id === userLoged);
    return users.filter(
      (u) => !user.following.includes(u.id) && u.id !== userLoged
    );
  };

  const usersSuggested = renderSuggestion();

  

  return (
    <div className={styles.container}>
      <h3>Suggested for you</h3>
      <ul>
        {usersSuggested.map((user) => {
          return <SuggestedUsers user={user} />;
        })}
      </ul>
    </div>
  );
}
