import logo from "./logo.svg";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/home";

function App() {
    return (
        <>
            <header>
                <a href="#">Last.fm</a>
                <Link to="/search">
                    <img src="#" alt="Search" />
                </Link>
            </header>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
