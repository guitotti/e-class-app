/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskCard from "../TaskCard";
import styles from "./TaskList.module.css";
import StudentTaskCard from "../StudentTaskCard";

function TaskList({ isStudent, tasks }) {

  const [openSections, setOpenSections] = useState({
    pendente: true,
    corrigida: false,
    enviada: false,
  });

  function switchSection(secao) {
    setOpenSections((prev) => ({
      ...prev,
      [secao]: !prev[secao],
    }));
  }

  const pendingTasks = tasks.filter((task) => task.status === "pendente");
  const correctedTasks = tasks.filter((task) => task.status === "corrigida");
  const sentTasks = tasks.filter((task) => task.status === "enviada");

  return (
    <div className={styles.taskListContainer}>
      <div>
        <h2 onClick={() => switchSection("pendente")}>
          {openSections.pendente ? "▼" : "▶"} Correção pendente
        </h2>
        {openSections.pendente && (
          <div className={styles.taskSection}>
            {pendingTasks.length > 0 ? (
              pendingTasks.map((task) =>
                !isStudent ? (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                ) : (
                  <StudentTaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                )
              )
            ) : (
              <p>Sem tarefas pendentes.</p>
            )}
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => switchSection("corrigida")}>
          {openSections.corrigida ? "▼" : "▶"} Atividades corrigidas
        </h2>
        {openSections.corrigida && (
          <div className={styles.taskSection}>
            {correctedTasks.length > 0 ? (
              correctedTasks.map((task) =>
                !isStudent ? (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                ) : (
                  <StudentTaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                )
              )
            ) : (
              <p>Sem atividades corrigidas.</p>
            )}
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => switchSection("enviada")}>
          {openSections.enviada ? "▼" : "▶"} Atividades enviadas
        </h2>
        {openSections.enviada && (
          <div className={styles.taskSection}>
            {sentTasks.length > 0 ? (
              sentTasks.map((task) => (
                !isStudent ? (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                ) : (
                  <StudentTaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                )
              ))
            ) : (
              <p>Sem atividades enviadas.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
