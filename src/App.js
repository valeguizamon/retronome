import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home text="Pagina de Inicio" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
