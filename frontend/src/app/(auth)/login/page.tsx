"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

const LoginPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleChange = () => {};

  return (
    <div className="loginContent">
      <div className={styles.loginContainer}>
        <div className={styles.loginBase}>
          <div className={styles.loginSection}>
            <h2 className={styles.titleHeader}>StudyNook</h2>
            <h3 className={styles.loginHeader}>- Login -</h3>
            <form className={styles.login}>
              <input
                type="username"
                className={styles.input}
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                type="password"
                className={styles.input}
                placeholder="Password"
                onChange={handleChange}
              />
              <button className={styles.loginButton}>Log in</button>
            </form>
            <div className={styles.forgotPasswordLink}>
              <a>Forgot password?</a>
            </div>
            <div className={styles.registerLink}>
              <a>Don't have an account? Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
