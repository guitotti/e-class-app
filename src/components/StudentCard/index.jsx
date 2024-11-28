/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./StudentCard.module.css";
import { BsPersonFill } from "react-icons/bs";

function StudentCard({
  id,
  name,
  schedule,
  description,
  pendingTask,
  pendingCorrection,
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/student/tasks", { state: id });
  };

  return (
    <div className={styles.studentCard} onClick={handleClick}>
      <div className={styles.studentInfo}>
        <div className={styles.studentAvatar}>
          <BsPersonFill />
        </div>
        <div>
          <p className={styles.studentName}>{name}</p>
          <p><strong>Horário de aula:</strong> {schedule}</p>
        </div>
      </div>
      <div className={styles.studentDescription}>
        <p>
          <strong>{description}</strong>
        </p>
        <p className={styles.status}>
          <span><span className={styles.task}>{pendingTask}</span>{" tarefa pendente"}</span>
          <span><span className={styles.correction}>{pendingCorrection}</span>{" correção pendente"}</span>
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
