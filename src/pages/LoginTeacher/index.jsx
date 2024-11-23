import styles from "./Login.module.css";

function Login() {
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
              <input type="email" id="email" name="email" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" />
            </div>
          </form>
          <button type="submit">Entrar</button>
          <a href="/register" className={styles.registerLink}>
            Cadastrar conta de professor
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
