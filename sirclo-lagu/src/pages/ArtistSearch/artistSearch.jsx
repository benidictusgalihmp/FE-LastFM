import { useState } from "react";
import { useEffect } from "react";

import Search from "../../components/Search/Search";
import ArtistSearchCard from "../../components/ArtistSearchCard/artistSearchCard";
import "./artistSearch.css";

function ArtistSearch() {
    const [query, setQuery] = useState("");
    const [queryResult, setQueryResult] = useState("");
    const [loadingSearch, setLoadingSearch] = useState(false);

    useEffect(() => {
        setLoadingSearch(true);

        fetch(
            `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQueryResult(data.results);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoadingSearch(false);
            });
    }, [query]);

    return (
        <div className="artist-search">
            <Search isTrack={false} setText={setQuery} />
            {!queryResult ? (
                <p></p>
            ) : (
                <p>{queryResult["opensearch:totalResults"]} total results.</p>
            )}
            <div>
                <ul>
                    {loadingSearch ? (
                        <img id="loader" src="/loader.svg" alt="loading icon" />
                    ) : !queryResult ? (
                        <p>Nothing to show right now.</p>
                    ) : (
                        <ol>
                            {queryResult.artistmatches.artist.map(
                                (artists, idx) => {
                                    return (
                                        <ArtistSearchCard
                                            artists={artists}
                                            idx={idx}
                                            key={idx}
                                        />
                                    );
                                }
                            )}
                        </ol>
                    )}
                </ul>
            </div>
            <button>Previous</button>
            <button>Next</button>
        </div>
    );
}

export default ArtistSearch;
