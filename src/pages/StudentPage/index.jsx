import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuthenticationCheck from "../../hooks/auth";
import { useLocation } from "react-router-dom";

function StudentPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [tasks, setTasks] = useState([]);
  const [studentData, setStudentData] = useState({});
  const location = useLocation();
  const state = location.state;
  setStudentData(state);

  const isAuthenticated = useAuthenticationCheck();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get("http://localhost:3000/tasks/");
          console.log(response.data);

          const tasks = response.data;
          setTasks(tasks);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTasks();
    }
  }, [isAuthenticated, studentData.studentId]);

  // const handleSaveTask = (event) => {
  //   event.preventDefault();

  //   const fetchData = async () => {
  //     try {
  //       await axios
  //         .post("http://localhost:3000/task", requestBody)
  //         .then(function (request) {
  //           console.log(request);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  //   setShowPopup(false);
  // };

  return (
    <div className={styles.app}>
      <Sidebar isStudent studentName={studentData.name} />
      <main>
        <Header title={"Atividades"} />
        <div className={styles.content}>
          <TaskList isStudent tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default StudentPage;
