import logo from "./logo.svg";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/home";
import Search from "./pages/SearchTrack/trackSearch";
import TopTracks from "./pages/TopTrack/topTracks";
import TopArtist from "./pages/TopArtist/topArtist";
import TrackSearch from "./pages/SearchTrack/trackSearch";

function App() {
    return (
        <>
            <header>
                <a href="#">Last.fm</a>
                <Link to="/track">Track</Link>
                <Link to="/artist">Artist</Link>
            </header>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/track" element={<TopTracks />} />
                    <Route path="/track/search" element={<TrackSearch />} />
                    <Route path="/artist" element={<TopArtist />} />
                    <Route path="/artist/search" element={<Search />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
