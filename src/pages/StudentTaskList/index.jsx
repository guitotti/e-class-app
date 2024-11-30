 
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentTaskList.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useAuthenticationCheck from "../../hooks/auth";

function StudentsTaskList() {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const location = useLocation();
  const state = location.state;
  console.log("state", state);

  const teacherId = localStorage.getItem("teacherId");
  console.log("teacher id",teacherId);

  const isAuthenticated = useAuthenticationCheck();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get("https://e-class-api.onrender.com/tasks", {
            params: {
              studentId: state
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
  }, [isAuthenticated, state]);

  const handleAddTaskButton = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }; 

  const handleSaveTask = (event) => {
    event.preventDefault();

    const requestBody = {
      title: title,
      description: description,
      status: "pending",
      dueDate: dueDate,
      teacherId: teacherId,
      studentId: state,
    };

    const fetchData = async () => {
      try {
        await axios.post('https://e-class-api.onrender.com/task', {
          data: requestBody
        })
        .then(function (request) {
          console.log(request);
          alert("Tarefa criada com sucesso!")
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    setShowPopup(false);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header title={"Seção de tarefas"} />
        <div className={styles.content}>
          <button
            className={styles.addTaskButton}
            onClick={handleAddTaskButton}
          >
            <AiOutlineFileAdd className={styles.addTaskIcon} />
            Adicionar tarefa
          </button>
          <TaskList tasks={tasks}/>
          {showPopup && (
            <div className={styles.popup}>
              <div className={styles.popupContent}>
                <h2>Adicionar tarefa</h2>
                <form>
                  <label htmlFor="title">Título:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <label htmlFor="description">Descrição:</label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <label htmlFor="dueDate">Data de entrega:</label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />

                  <div className={styles.popupActions}>
                    <button type="submit" onClick={handleSaveTask}>
                      Adicionar
                    </button>
                    <button type="button" onClick={handleClosePopup}>
                      Fechar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default StudentsTaskList;
