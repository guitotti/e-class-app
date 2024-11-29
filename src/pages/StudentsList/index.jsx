import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StudentList from "../../components/StudentList";
import styles from "./StudentList.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthenticationCheck from "../../hooks/auth";
import axios from "axios";

function StudentsList() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [students, setStudents] = useState([]);

  const isAuthenticated = useAuthenticationCheck();
  const teacherId = localStorage.getItem("teacherId");
  console.log(teacherId);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchStudents = async () => {
        try {
          const response = await axios.get("http://localhost:3000/students", {
            params: {
              teacherId: teacherId
            }
          });
          console.log(response.data);

          const students = response.data;
          setStudents(students);
        } catch (error) {
          console.error(error);
        }
      };
      fetchStudents();
    }
  }, [isAuthenticated, teacherId]);

  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header title={"Lista de estudantes"}/>
        <div className={styles.content}>
          <StudentList students={students}/>
        </div>
      </main>
    </div>
  );
}

export default StudentsList;
