import Login from './pages/LogIn';
import Home from './pages/Home';
import './App.css';
import { db, auth } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const usersCollectRef = collection(db, "users");
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  );
}

export default App;
