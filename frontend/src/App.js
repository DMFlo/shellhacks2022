import Home from './pages/Home';
import './App.css';
import { db, auth } from "./firebase-config";

console.log(auth)
console.log(db)

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
