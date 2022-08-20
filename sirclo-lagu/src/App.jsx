import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/home";
import Search from "./pages/SearchTrack/trackSearch";
import TopTracks from "./pages/TopTrack/topTracks";
import TopArtist from "./pages/TopArtist/topArtist";
import TrackSearch from "./pages/SearchTrack/trackSearch";

function App() {
    return (
        <div className="App">
            <header>
                <Link to="/" className="logo">
                    Last.fm
                </Link>
                <ul>
                    <li>
                        <div className="topnav">
                            <Link to="/track">Track</Link>
                            <Link to="/artist">Artist</Link>
                        </div>
                    </li>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/track" element={<TopTracks />} />
                <Route path="/track/search" element={<TrackSearch />} />
                <Route path="/artist" element={<TopArtist />} />
                <Route path="/artist/search" element={<Search />} />
            </Routes>
        </div>
    );
}

export default App;
