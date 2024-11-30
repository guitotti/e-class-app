/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { IoPower } from "react-icons/io5";

function Header({ title }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Deseja realmente sair?")) {
      localStorage.removeItem("token");
      navigate("/login");
    }

    else return
  };
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <input type="text" placeholder="Pesquisar por nome" disabled />
      <button className={styles.logoutButton} onClick={handleLogout}>
        <IoPower />
      </button>
    </div>
  );
}

export default Header;
