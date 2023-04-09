"use client";
import styles from "./SinglePost.module.css";
import users from "../../Users.json";
import { useState } from "react";
import { CommentModal } from "../CommentModal/CommentModal";

export function SinglePost({ post }) {
  const user = users.find((u) => u.id === post.userid);
  const userloged = "u001";
  const [like, setLike] = useState(post.likes);
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [likesAreVisible, setLikesAreVisible] = useState(false);

  const handleLike = () => {
    if (like.includes(userloged)) {
      setLike((current) => current.filter((userId) => userId !== userloged));
    } else {
      setLike([...like, userloged]);
    }
  };

  const showLikes = () => setLikesAreVisible(true);
  const closeLikes = () => setLikesAreVisible(false);
  const showModal = () => setmodalIsVisible(true);
  const closeModal = () => setmodalIsVisible(false);

  return (
    <div className={styles.box}>
      <div className={styles.user}>
        <div
          className={styles.userpic}
          style={{
            backgroundImage: user.profilePic,
          }}
        ></div>
        <div className={styles.userinfo}>
          <h3 className={styles.username}>{user.name + " " + user.lastName}</h3>
          <span>{user.profession}</span>
        </div>
      </div>
      <p className={styles.text}>{post.text}</p>
      {post.imgurl !== null ? (
        <div
          className={styles.img}
          style={{
            backgroundImage: post.imgurl,
          }}
        ></div>
      ) : null}

      <div className={styles.social}>
        <div className={styles.reacciones}>
          <p onMouseOut={closeLikes} onMouseOver={showLikes}>
            {like.length} Likes
          </p>
          {like.length !== 0 ? (
            <ul
              className={
                likesAreVisible
                  ? styles.listOfLikes + " " + styles.showUserLikes
                  : styles.listOfLikes
              }
            >
              {like.map((l) => {
                const userLike = users.find((u) => u.id === l);
                return <li>{userLike.name + " " + userLike.lastName}</li>;
              })}
            </ul>
          ) : null}

          <p>{post.comments.length + " Comments"}</p>
        </div>
        <CommentModal
          comments={post.comments}
          show={modalIsVisible}
          closeModal={closeModal}
        />
        <ul className={styles.reaccionar}>
          <li>
            <p onClick={handleLike}>
              {like.includes(userloged) ? "Dislike" : "Like"}
            </p>
          </li>
          <li>
            <a href="">Share</a>
          </li>
          <li>
            <p onClick={showModal}>Comment</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
