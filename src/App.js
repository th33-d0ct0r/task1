import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/login';
import CompleteProfile from './pages/CompleteProfile';
import axios from "axios"

function App() {
  const [user, setUser] = useState(null);
  const [complete, setComplete] = useState(false)

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials: true});
      console.log(data)
      if (data.message === 'Successfully logged in') {
        setComplete(true)
        console.log("complete is ", complete)
      }
      setUser(data.user._json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <div className="container">
      <Routes>
        
        <Route 
        exact
        path='/'
        element={user ? complete ? <Home user={user} /> : <Navigate to='/complete' /> : <Navigate to='/login' />}
         />
        <Route 
        exact
        path='/complete'
        element={user ? complete ? <Home user={user} /> : <CompleteProfile /> : <Navigate to='/login' />}
         />

      <Route 
        exact
        path='/login'
        element={user ? <Navigate to='/' /> : <Login />}
         />
      </Routes>
    </div>
  );
}

export default App;
