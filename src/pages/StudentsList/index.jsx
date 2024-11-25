import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StudentList from "../../components/StudentList";
import styles from "./StudentList.module.css";

function StudentsList() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header title={"Lista de estudantes"}/>
        <div className={styles.content}>
          <StudentList />
        </div>
      </main>
    </div>
  );
}

export default StudentsList;
