/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import styles from "./StudentPage.module.css";
import { useState } from "react";
import axios from "axios";

function StudentPage({ student }) {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");


  const studentName = "Guilherme Henrique"
  const requestBody = {
    title: title,
    description: description,
    status: "pending",
    dueDate: dueDate,
    teacherId: "12345",
    studentId: "54321",
  };

  const handleSaveTask = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await axios
          .post("http://localhost:3000/task", requestBody)
          .then(function (request) {
            console.log(request);
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
  };

  return (
    <div className={styles.app}>
      <Sidebar isStudent studentName={studentName}	/>
      <main>
        <Header title={"Atividades"} />
        <div className={styles.content}>
          <TaskList isStudent/>
        </div>
      </main>
    </div>
  );
}

export default StudentPage;
