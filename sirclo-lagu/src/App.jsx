import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/home";
import TopTracks from "./pages/TopTrack/topTracks";
import TopArtist from "./pages/TopArtist/topArtist";
import TrackSearch from "./pages/Search/TrackSearch/trackSearch";
import ArtistSearch from "./pages/Search/ArtistSearch/artistSearch";

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
                <Route path="/artist/search" element={<ArtistSearch />} />
            </Routes>
        </div>
    );
}

export default App;
