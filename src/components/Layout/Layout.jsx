import styles from "./Layout.module.css";

// 기본 틀
const Layout = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Layout;
