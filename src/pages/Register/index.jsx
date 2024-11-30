import axios from "axios";
import styles from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await axios.post('https://e-class-api.onrender.com/teacher', {
          name: name,
          email: email,
          password: password,
        })
        .then(function (request) {
          console.log(request);
          alert("Professor cadastrado com sucesso!");
          navigate("/login");
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
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.logoSection}>
        <img
          src="/src/assets/images/e-class-logo.svg"
          alt="e-class logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.registerFormSection}>
        <h2>Cadastrar</h2>
        <div className={styles.registerForm}>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input type="name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </form>
          <button className={styles.registerButton} type="submit" onClick={handleSubmit}>Cadastrar</button>
          <a href="/login" className={styles.registerLink}>
            Já possui uma conta? Fazer login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
