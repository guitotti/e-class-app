import styles from "./Sidebar.module.css";
import {
  BsPersonFill,
  BsPersonFillAdd,
  BsFillPeopleFill,
  BsCalendarDateFill,
} from "react-icons/bs";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img
          src="src/assets/images/e-class-logo.svg"
          alt="e-class logo"
          className={styles.logoImage}
        />
      </div>
      <nav>
        <ul>
          <li>
            <BsPersonFill className={styles.icon} />
            Acessar estudantes
          </li>
          <li>
            <BsFillPeopleFill className={styles.icon} />
            Acessar turmas
          </li>
          <li>
            <BsPersonFillAdd className={styles.icon} />
            Cadastrar estudante
          </li>
          <li>
            <BsFillPeopleFill className={styles.icon} />
            Criar turma
          </li>
          <li>
            <BsCalendarDateFill className={styles.icon} />
            Calendário
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
