import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await axios.post('http://localhost:3000/login', {
          email: email,
          password: password,
        })
        .then(function (request) {
          const data = request.data;
          console.log(data);

          localStorage.setItem("token", data.token);
          alert("Olá, teacher!");
          navigate("/students", { state: data.teacher });
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();  
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.logoSection}>
        <img
          src="/src/assets/images/e-class-logo.svg"
          alt="e-class logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.loginFormSection}>
        <h2>Login</h2>
        <h4>Para contas de professor.</h4>
        <div className={styles.loginForm}>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
          </form>
          <button type="submit" onClick={handleSubmit}>Entrar</button>
          <a href="/register" className={styles.registerLink}>
            Cadastrar conta de professor
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
