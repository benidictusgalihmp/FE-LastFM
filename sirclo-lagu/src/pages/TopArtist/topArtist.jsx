import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ArtistCard from "../../components/ArtistCard/artistCard";
import "./topArtist.css";

function TopArtist() {
    const [artists, setArtists] = useState([]);
    const [loadingArtist, setLoadingArtist] = useState(false);

    useEffect(() => {
        setLoadingArtist(true);

        fetch(
            `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
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

    return (
        <div className="artist">
            <ul>
                <li>
                    <h1>Top Artist This Month</h1>
                    <Link to="/artist/search">
                        <p>Find Artist</p>
                        <img src="/search.svg" alt="search button" />
                    </Link>
                </li>
            </ul>
            {loadingArtist ? (
                <img id="loader" src="/loader.svg" alt="loading icon" />
            ) : (
                <ol>
                    {artists.map((artists, idx) => {
                        if (idx < 5) {
                            return (
                                <ArtistCard
                                    artists={artists}
                                    key={idx}
                                    idx={idx}
                                />
                            );
                        }
                    })}
                </ol>
            )}
        </div>
    );
}

export default TopArtist;
