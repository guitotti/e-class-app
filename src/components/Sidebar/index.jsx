/* eslint-disable react/prop-types */
import styles from "./Sidebar.module.css";
import {
  BsPersonFill,
  BsPersonFillAdd,
  BsFillPeopleFill,
  BsCalendarDateFill,
} from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Sidebar({ isStudent }) {

  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img
          src="/src/assets/images/e-class-logo.svg"
          alt="e-class logo"
          className={styles.logoImage}
        />
      </div>
      {isStudent ? (
        <>
          <p>Olá</p>
          <span>Estudante</span>
          <nav>
            <ul>
              <li>
                <FaFileSignature className={styles.icon} />
                Atividades
              </li>
              <li>
                <BsCalendarDateFill className={styles.icon} />
                Calendário
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav>
          <ul>
            <li onClick={() => navigate('/students')}>
              <BsPersonFill className={styles.icon} />
              Acessar estudantes
            </li>
            <li>
              <BsFillPeopleFill className={styles.icon} />
              Acessar turmas
            </li>
            <li onClick={() => navigate('/register/student')}>
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
      )}
    </div>
  );
}

export default Sidebar;
