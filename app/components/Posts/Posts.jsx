import { SinglePost } from "../SinglePost/SinglePost";
import styles from "./Posts.module.css";
import posts from "../../Posts.json";

export function Posts() {
  return (
    <section className={styles.container}>
      {posts.map((post) => {
        return (
          <SinglePost
            key={post.id}
            post={post}
          />
        );
      })}
    </section>
  );
}
