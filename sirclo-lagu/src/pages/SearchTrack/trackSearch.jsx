import { useState } from "react";
import { useEffect } from "react";

import TrackSearchCard from "../../components/trackSearchCard/trackSearchCard";
import Search from "../../components/Search/Search";
import "../TopTrack/topTracks.css";

function TrackSearch() {
    const [searchTrack, setSearchTrack] = useState([]);
    const [page, setPage] = useState(0);
    const [isEmptySearch, setIsEmptySearch] = useState(true);
    const [showTrack, setShowTrack] = useState([]);

    useEffect(() => {
        if (searchTrack !== undefined) {
            setIsEmptySearch(false);
            let tracks_len = searchTrack.length;
            let max_track_len =
                tracks_len < page * 5 + 5 ? tracks_len : page * 5 + 5;
            let showed_track = [];

            for (let i = page * 5; i < max_track_len; i++) {
                showed_track.push(searchTrack[i]);
            }
            setShowTrack(showed_track);
        } else if (searchTrack === undefined) {
            setIsEmptySearch(true);
        }
    }, [searchTrack, page]);

    const changePage = (delta) => {
        let upper_page = Math.floor(searchTrack.length / 5);
        let lower_page = -1;

        if (page + delta < upper_page && page + delta > lower_page) {
            setPage(page + delta);
        } else {
            setPage(page);
        }
    };

    return (
        <div className="track">
            <Search isTrack={true} searchHandler={setSearchTrack} />

            <ul className="table-header">
                <li>
                    <p>Title</p>
                </li>
                <li>
                    <p>Plays</p>
                </li>
                <li>
                    <p>Duration (minutes)</p>
                </li>
            </ul>
            {isEmptySearch ? (
                <div>Click and type search above.</div>
            ) : (
                <ol>
                    {showTrack.map((searchTrack, idx) => {
                        return (
                            <TrackSearchCard
                                searchTrack={searchTrack}
                                key={idx}
                            />
                        );
                    })}
                </ol>
            )}
            <ul className="change-btn">
                <li>
                    <button
                        onClick={() => {
                            changePage(-1);
                        }}
                    >
                        Previous
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            changePage(1);
                        }}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default TrackSearch;
