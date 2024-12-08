import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import styles from "./RegisterStudent.module.css";
import axios from "axios";
import { useState } from "react";

function RegisterStudent() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");
  
  const handleSubmitStudent = (event) => {
    event.preventDefault();
  
    const fetchData = async () => {
      try {
        await axios.post('https://e-class-api.onrender.com/student', {
          name: name,
          userId: user,
          email: email,
          password: password,
          description: description,
          weekday: weekday,
          time: time,
          teacherId: localStorage.getItem("teacherId")
        })
        .then(function (request) {
          console.log(request);
          alert("Estudante cadastrado com sucesso!");
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
    setName("");
    setUser("");
    setEmail("");
    setPassword("");
    setDescription("");
    setWeekday("");
    setTime("");
  };


  const cleanForm = () => {
    setName("");
    setUser("");
    setEmail("");
    setPassword("");
    setDescription("");
    setWeekday("");
    setTime("");
  };

  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Header title={"Lista de estudantes"} />
        <div className={styles.content}>
          <div className={styles.container}>
            <h3>Preencha os dados do(a) estudante</h3>
            <input type="text" placeholder="Nome" className={styles.input} value={name} onChange={(event) => setName(event.target.value)}/>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Usuário"
                className={styles.input}
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                className={styles.input}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="E-mail (opcional)"
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              className={styles.input}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <div className={styles.row}>
              <select 
                placeholder="Dia da semana"
                className={styles.input}
                value={weekday}
                onChange={(event) => setWeekday(event.target.value)}
              >
                <option value="segunda-feira">Segunda-feira</option>
                <option value="terça-feira">Terça-feira</option>
                <option value="quarta-feira">Quarta-feira</option>
                <option value="quinta-feira">Quinta-feira</option>
                <option value="sexta-feira">Sexta-feira</option>
                <option value="sábado">Sabado</option>
              </select>
              <input
                type="time"
                placeholder="Horário"
                className={styles.input}
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
            <div className={styles.actionsContainer}>
              <button className={styles.registerButton} onClick={handleSubmitStudent}>Cadastrar</button>
              <button className={styles.cancelButton} onClick={cleanForm}>Limpar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RegisterStudent;
