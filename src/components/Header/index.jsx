import styles from "./Header.module.css";
import { IoPower } from "react-icons/io5";


function Header() {
  return (
    <div className={styles.header}>
      <h2>Estudantes</h2>
      <input type="text" placeholder="Pesquisar por nome" />
      <button className={styles.logoutButton}><IoPower /></button>
    </div>
  );
}

export default Header;
