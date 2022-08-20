import TopTracks from "../../components/TopTracks/topTracks";
import "./home.css";

function Homepage() {
    return (
        <div className="container">
            <div className="section">
                <h1>Top Tracks</h1>
                <hr />
                <TopTracks />
            </div>
            <div className="section">
                <h1>Top Artist</h1>
                <hr />
            </div>
        </div>
    );
}

export default Homepage;
