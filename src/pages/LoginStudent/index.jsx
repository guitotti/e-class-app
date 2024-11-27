import axios from "axios";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const user = event.target.user.value;
  //   const password = event.target.password.value;

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/data');
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();  

  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await axios.post('http://localhost:3000/student/login', {
          username: user,
          password: password,
        })
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
    setUser("");
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
        <h4>Para contas de estudante.</h4>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="user">Usuário</label>
              <input type="text" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
          <button type="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
