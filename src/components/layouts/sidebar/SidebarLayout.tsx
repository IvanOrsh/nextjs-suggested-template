import Link from "next/link";

import styles from "./SidebarLayout.module.css";

export interface ISidebarLayoutProps {}

const SidebarLayout: React.FC<ISidebarLayoutProps> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
