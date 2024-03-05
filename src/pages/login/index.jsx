import {Link} from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
    function googleAuth() {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Login Form</h1>
            <div className={styles.form_container}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className={styles.button}>Submit</button>
                <p>or</p>
                <button className={styles.google_button} onClick={googleAuth}>Login with google</button>
                <p className={styles.link}>New here? <Link to="/signup">Create a new account</Link></p>
            </div>
        </div>
    )
}

export default Login