import { useState } from "react";
import { useEffect } from "react";

import Search from "../../components/Search/Search";
import TrackSearchCard from "../../components/TrackSearchCard/trackSearchCard";
import "./trackSearch.css";

function TrackSearch() {
    const [query, setQuery] = useState("");
    const [queryResult, setQueryResult] = useState("");
    const [loadingSearch, setLoadingSearch] = useState(false);

    useEffect(() => {
        setLoadingSearch(true);

        fetch(
            `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=0b561534a038ff6eab3ce6edfae840ec&format=json`
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
        <div className="track-search">
            <Search isTrack={true} setText={setQuery} />
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
                            {queryResult.trackmatches.track.map(
                                (tracks, idx) => {
                                    return (
                                        <TrackSearchCard
                                            tracks={tracks}
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

export default TrackSearch;
