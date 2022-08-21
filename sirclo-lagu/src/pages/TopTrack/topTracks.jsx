import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import TrackCard from "../../components/TrackCard/trackCard";
import "./topTracks.css";

function TopTracks() {
    const [tracks, setTracks] = useState([]);
    const [loadingTracks, setLoadingTracks] = useState(false);

    useEffect(() => {
        setLoadingTracks(true);

        fetch(
            `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTracks(data.tracks.track);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoadingTracks(false);
            });
    }, []);

    return (
        <div className="track">
            <ul>
                <li>
                    <h1>Top Tracks This Month</h1>
                    <Link to="/track/search">
                        <p>Find Track</p>
                        <img src="/search.svg" alt="searh button" />
                    </Link>
                </li>
            </ul>
            <div className="table-header">
                <p>#</p>
                <p>Title</p>
                <p>Plays</p>
                <p>Duration (minutes)</p>
            </div>
            <hr />
            {loadingTracks ? (
                <img id="loader" src="/loader.svg" alt="loading icon" />
            ) : (
                <ol>
                    {tracks.map((track, idx) => {
                        if (idx < 5) {
                            return (
                                <TrackCard
                                    track={track}
                                    idx={idx + 1}
                                    key={idx}
                                />
                            );
                        }
                    })}
                </ol>
            )}
        </div>
    );
}

export default TopTracks;
