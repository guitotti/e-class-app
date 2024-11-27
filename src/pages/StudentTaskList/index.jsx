/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentTaskList.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

function StudentsTaskList({ student }) {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTaskButton = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const requestBody = {
    title: title,
    description: description,
    status: "pending",
    dueDate: dueDate,
    teacherId: "12345",
    studentId: "54321",
  };

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('status', 'pending');
  formData.append('dueDate', dueDate);
  formData.append('teacherId', '12345');
  formData.append('studentId', '54321');

  const handleSaveTask = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/task', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    setShowPopup(false);
  };

  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header title={"Estudante: " + "Nome do Estudante"} />
        <div className={styles.content}>
          <button
            className={styles.addTaskButton}
            onClick={handleAddTaskButton}
          >
            <AiOutlineFileAdd className={styles.addTaskIcon} />
            Adicionar tarefa
          </button>
          <TaskList />
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
