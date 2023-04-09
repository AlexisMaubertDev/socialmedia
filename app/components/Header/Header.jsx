import styles from "./header.module.css";
import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Friends",
    route: "/friends",
  }
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navegador}>
        <ul>
          <div className={styles.linkscontainer}>
            <li className={styles.links + " " + styles.logo}>SocialMediaApp</li>
          </div>
          <div className={styles.linkscontainer}>
            {links.map(({ label, route }) => (
              <li key={route} className={styles.links}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}
