import styles from "./Register.module.css";

function Login() {
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
            Já possui uma conta? Fazer login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
