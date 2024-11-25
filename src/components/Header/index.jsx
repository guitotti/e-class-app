/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import { IoPower } from "react-icons/io5";


function Header({ title }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <input type="text" placeholder="Pesquisar por nome" disabled/>
      <button className={styles.logoutButton}><IoPower /></button>
    </div>
  );
}

export default Header;
