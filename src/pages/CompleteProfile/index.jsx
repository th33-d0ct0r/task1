import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CompleteProfile() {
    const [user, setUser] = useState(null)
    const [render, setRender] = useState(false)
    const getUser = async () => {
        try {
          const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
          const {data} = await axios.get(url, {withCredentials: true});
          setUser(data.user._json)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        getUser()
      }, []);
    console.log(user)
    const [age, setAge] = useState(0);
    async function complete() {
        try {
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ user: user })
            // };
            const url = `${process.env.REACT_APP_API_URL}/auth/update/${age}`;
            // const {data} = await axios.get(url, {withCredentials: true});
            // await fetch(url, {
            //     method: 'post',
            //     headers: {'Content-Type':'application/json'},
            //     body: JSON.stringify({
            //          "user": user
            //     })
            //  });
            const data = {
                user: user
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);
                    // return redirect("/login");
                    setRender(true)
                })
              .catch(error => {
                console.error('Error:', error);
              });
            // await axios.post(url).then(response => {
            //     console.log(response)
            // })
          } catch (error) {
            console.log(error)
          }
    }
    return (
        <div>
            Complete your profile
            <input type="number" onInput={e => setAge(e.target.value)} placeholder="Enter your age" />
            {render ? <button onClick={complete} disabled>Submit</button> : <button onClick={complete}>Submit</button>}
            <br />
            <br />
            <br />

            {render ? <Link to="/">
            <span>Go to home</span>
          </Link> : ""}


        </div>
    )
}

export default CompleteProfile