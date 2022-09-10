import Login from './pages/LogIn';
import Home from './pages/Home';
import './App.css';
import { db, auth } from "./firebase-config";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  );
}

export default App;
