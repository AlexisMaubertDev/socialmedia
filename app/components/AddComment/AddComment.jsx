import { useEffect, useState } from "react";
import styles from "./AddComment.module.css";

export function AddComment({ comment, onChange, changes, show }) {
  const [currentResponse, setCurrentResponse] = useState("");
  const userloged = "u001";

  const handleClick = () => {
    if (currentResponse !== "") {
      comment.responses.push({
        id: "r003",
        userid: userloged,
        text: currentResponse,
        likes: [],
      });
      setCurrentResponse("");
      onChange();
    }
  };

  return (
    <div
      className={
        !show
          ? styles.inputResponseContainer
          : styles.inputResponseContainer + " " + styles.showinput
      }
    >
      <div className={styles.inputResponse}>
        <input
          type="text"
          required
          value={currentResponse}
          onChange={(e) => setCurrentResponse(e.target.value)}
        />
        <input type="submit" value="Response" onClick={handleClick} />
      </div>
    </div>
  );
}
