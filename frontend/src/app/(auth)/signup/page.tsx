"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";

const signupPage = () => {

    const router = useRouter()

    const handleClick = () => {
        router.push("/")
    }

    const handleChange = () => {
        
    }

    return (
        <div className="signupContent">
            <div className={styles.signupContainer}>
                <div className={styles.signupBase}>
                    <div className={styles.signupSection}>
                        <h2 className={styles.titleHeader}>StudyNook</h2>
                        <h3 className={styles.signupHeader}>- Sign up -</h3>
                        <form className={styles.signup}>
                            <input type="email" className={styles.input} placeholder="Email" onChange={handleChange} />
                            <input type="username" className={styles.input} placeholder="Username" onChange={handleChange} />
                            <input type="password" className={styles.input} placeholder="Password" onChange={handleChange} />
                            <button className={styles.signupButton}>Sign up</button>
                        </form>
                        <div className={styles.loginLink}>
                            <a>Have an account? Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default signupPage;