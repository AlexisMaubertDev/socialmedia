import styles from "./LeftPanel.module.css";
import users from "../../Users.json";
import posts from "../../Posts.json";

export function LeftPanel() {
  const userLoged = users.find((u) => u.id === "u001");

  const count = () => {
    let countLikes = 0;
    let countPosts = 0;
    let countComments = 0;
    let countShared = 0;

    posts.forEach((post) => {
      if (post.userid === userLoged.id) {
        countPosts++;
      }
      if (post.likes.includes(userLoged.id)) {
        countLikes++;
      }
      post.comments.forEach((comment) => {
        if (comment.userid === userLoged.id) {
          countComments++;
        }
        if (comment.likes.includes(userLoged.id)) {
          countLikes++;
        }

        comment.responses.forEach((response) => {
          if (response.userid === userLoged.id) {
            countComments++;
          }
          if (response.likes.includes(userLoged.id)) {
            countLikes++;
          }
        });
      });
    });
    return { countLikes, countComments, countPosts, countShared };
  };

  const { countLikes, countComments, countPosts, countShared } = count();

  return (
    <section className={styles.personalInfo}>
      <div className={styles.info}>
        <div
          className={styles.left}
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/3135/3135768.png')",
          }}
        ></div>
        <div className={styles.right}>
          <h3>{userLoged.name + " " + userLoged.lastName}</h3>
          <h4>{userLoged.profession}</h4>
          <div>
            <span>JS</span>
            <span> - </span>
            <span>React </span>
            <span> - </span>
            <span>Next </span>
          </div>
        </div>
      </div>
      <ul className={styles.actividad}>
        <li>
          <a href="">
            Posts<span>{countPosts} </span>
          </a>
        </li>
        <li>
          <a href="">
            Comments<span>{countComments} </span>
          </a>
        </li>
        <li>
          <a href="">
            Likes<span>{countLikes}</span>
          </a>
        </li>
        <li>
          <a href="">
            Shared<span>{countShared}</span>
          </a>
        </li>
        <li>
          <a href="">
            Following<span>{userLoged.following.length}</span>
          </a>
        </li>
        <li>
          <a href="">
            Followers<span>{userLoged.followers.length} </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
