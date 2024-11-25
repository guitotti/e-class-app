import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StudentList from "../../components/StudentList";
import styles from "./StudentList.module.css";

function StudentsList() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header />
        <div>
          <StudentList />
        </div>
      </main>
    </div>
  );
}

export default StudentsList;
