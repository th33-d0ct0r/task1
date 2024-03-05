import styles from "./styles.module.css";

function Home(userDetails) {
    const user = userDetails.user;
    console.log(user)
    function logout() {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        );
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form_container}>
                {/* <input type="text" placeholder="Username" />
                <input type="number" placeholder="Age" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className={styles.button}>Submit</button>
                <p>or</p>
                <button className={styles.google_button} onClick={googleAuth}>Sign up with google</button>
                <p className={styles.link}>Already have an account? <Link to="/login">Login</Link></p> */}
                <img src={user.picture} alt="profile pic" style={{width: "60px", height: "60px"}} />
                <p>Username: {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home;