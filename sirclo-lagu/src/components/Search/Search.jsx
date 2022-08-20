import { useState } from "react";
import { useEffect } from "react";

function Search(props) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(
            props.isTrack
                ? `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
                : `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.searchHandler(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [query]);

    return (
        <div>
            <input
                id="text-query"
                type="text"
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <img src="/search.svg" alt="Search" />
        </div>
    );
}

export default Search;
