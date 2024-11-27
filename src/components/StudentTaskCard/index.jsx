/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./StudentTaskCard.module.css";
import { BsEyeFill, BsSendArrowUpFill } from "react-icons/bs";
import { BiSolidCloudDownload } from "react-icons/bi";

function StudentTaskCard({ id, status, title, description, dueDate }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleEyeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskInfo}>
        <div>
          <p className={styles.taskTitle}>{title}</p>
          <p>
            <strong>Data de entrega:</strong> {dueDate}
          </p>
        </div>
      </div>
      <div className={styles.taskActions}>
        {status == "pendente" ? (
          <button className={styles.sendButton} onClick={() => console.log("Clicou no estudante " + id)}>
            <BsSendArrowUpFill className={styles.icon} /> Enviar
          </button>
        ) : (
          <button onClick={handleEyeClick}>
            <BsEyeFill className={styles.eyeIcon} />
          </button>
        )}
        
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Informações da Tarefa</h3>
            <p className={styles.popupTitle}>
              <span>{title}</span>
            </p>
            <p>
              <span>Status:</span> {status}
            </p>
            <p>
              <span>Data de entrega:</span> {dueDate}
            </p>
            <p>
              <span>Descrição:</span> {description}
            </p>
            <div className={styles.popupActions}>
              <button>
                <BiSolidCloudDownload className={styles.downloadIcon} /> Baixar
              </button>
              <button onClick={handleClosePopup}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentTaskCard;
