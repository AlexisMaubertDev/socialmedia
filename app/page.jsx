import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { Posts } from "./components/Posts/Posts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LeftPanel />
      <Posts />
      <LeftPanel />
    </main>
  );
}
