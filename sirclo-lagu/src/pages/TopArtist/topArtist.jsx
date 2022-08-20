import { useEffect } from "react";
import { useState } from "react";
import ArtistCard from "../../components/ArtistCard/artistCard";

import "./topArtist.css";

function TopArtist() {
    const [artists, setArtists] = useState([]);
    const [loadingArtist, setLoadingArtist] = useState(false);
    const [page, setPage] = useState(0);
    const [showArtist, setShowArtist] = useState([]);

    useEffect(() => {
        let artists_len = artists.length;
        let max_artist_len =
            artists_len < page * 5 + 5 ? artists_len : page * 5 + 5;
        let showed_artists = [];

        for (let i = page * 5; i < max_artist_len; i++) {
            showed_artists.push(artists[i]);
        }
        setShowArtist(showed_artists);
    }, [artists, page]);

    useEffect(() => {
        setLoadingArtist(true);

        fetch(
            "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArtists(data.artists.artist);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoadingArtist(false);
            });
    }, []);

    const changePage = (delta) => {
        let upper_page = Math.floor(artists.length / 5);
        let lower_page = -1;

        if (page + delta < upper_page && page + delta > lower_page) {
            setPage(page + delta);
        } else {
            setPage(page);
        }
    };

    return (
        <div className="artist">
            <ol>
                {showArtist.map((artists, idx) => {
                    return <ArtistCard artists={artists} key={idx} idx={idx} />;
                })}
            </ol>
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

export default TopArtist;
