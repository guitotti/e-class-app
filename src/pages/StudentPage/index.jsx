import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuthenticationCheck from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

function StudentPage() {
  // const [showPopup, setShowPopup] = useState(false);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);


  const isAuthenticated = useAuthenticationCheck();
  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    if (isAuthenticated) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get("https://e-class-api.onrender.com/tasks", {
            params: {
              studentId: studentId
            }
          });
          console.log(response.data);

          const tasks = response.data;
          setTasks(tasks);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTasks();
    } 
  }, [isAuthenticated, studentId, navigate]);

  // const handleSaveTask = (event) => {
  //   event.preventDefault();

  //   const fetchData = async () => {
  //     try {
  //       await axios
  //         .post("https://e-class-api.onrender.com/task", requestBody)
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
      <Sidebar isStudent />
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
