/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentTaskList.module.css";

function StudentsTaskList({ student }) {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
      <Header title={"Estudante: " + "Nome do Estudante"}/>
        <div className={styles.content}>
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default StudentsTaskList;
