import { useState } from "react";
import { useEffect } from "react";
import TrackCard from "../TrackCard/trackCard";
import "./topTracks.css";

function TopTracks() {
    const [tracks, setTracks] = useState([]);
    const [loadingTracks, setLoadingTracks] = useState(false);
    const [page, setPage] = useState(0);
    const [showTrack, setShowTrack] = useState([]);

    useEffect(() => {
        let tracks_len = tracks.length;
        let max_track_len =
            tracks_len < page * 5 + 5 ? tracks_len : page * 5 + 5;
        let showed_track = [];

        for (let i = page * 5; i < max_track_len; i++) {
            showed_track.push(tracks[i]);
        }
        setShowTrack(showed_track);
    }, [tracks, page]);

    useEffect(() => {
        setLoadingTracks(true);

        fetch(
            "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json"
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

    const changePage = (delta) => {
        let upper_page = Math.floor(tracks.length / 5);
        let lower_page = -1;

        if (page + delta < upper_page && page + delta > lower_page) {
            setPage(page + delta);
        } else {
            setPage(page);
        }
    };

    return (
        <div className="track">
            <button
                onClick={() => {
                    changePage(-1);
                }}
            >
                Previous
            </button>
            <button
                onClick={() => {
                    changePage(1);
                }}
            >
                Next
            </button>
            {loadingTracks ? (
                <div>Loading...</div>
            ) : (
                <ol>
                    {showTrack.map((track, idx) => {
                        return <TrackCard track={track} key={idx} />;
                    })}
                </ol>
            )}
        </div>
    );
}

export default TopTracks;
