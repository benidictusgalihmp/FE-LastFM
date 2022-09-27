import { useState } from "react";
import { useEffect } from "react";

import Search from "../../../components/Search/SearchBar/search";
import ArtistSearchCard from "../../../components/Search/ArtistSearchCard/artistSearchCard";
import CurrencyFormatter from "../../../module/currencyFormatter";
import "../searchPage.css";

function ArtistSearch() {
    const [query, setQuery] = useState("");
    const [queryResult, setQueryResult] = useState("");
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [page, setPage] = useState(0);
    const [showResult, setShowResult] = useState([]);

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

    useEffect(() => {
        if (queryResult) {
            let queryResults_len = queryResult.artistmatches.artist.length;
            let max_queryResults_len =
                queryResults_len < page * 5 + 5
                    ? queryResults_len
                    : page * 5 + 5;
            let showed_Results = [];

            for (let i = page * 5; i < max_queryResults_len; i++) {
                showed_Results.push(queryResult.artistmatches.artist[i]);
            }
            setShowResult(showed_Results);
        }
    }, [queryResult, page]);

    const changePage = (delta) => {
        if (queryResult) {
            let upper_page = Math.floor(
                queryResult.artistmatches.artist.length / 5
            );
            let lower_page = -1;

            if (page + delta < upper_page && page + delta > lower_page) {
                setPage(page + delta);
            } else {
                setPage(page);
            }
        }
    };

    return (
        <div className="section artist-search">
            <h1>Search Artist</h1>
            <Search
                isTrack={false}
                setText={setQuery}
                setPagination={setPage}
            />
            <hr />
            {!queryResult ? (
                <p></p>
            ) : (
                <p className="results-number">
                    {CurrencyFormatter(queryResult["opensearch:totalResults"])}{" "}
                    total results.
                </p>
            )}
            <div className="container">
                <ul>
                    {loadingSearch ? (
                        <img id="loader" src="/loader.svg" alt="loading icon" />
                    ) : !queryResult ? (
                        <p>Nothing to show right now.</p>
                    ) : (
                        <ol>
                            {showResult.map((artists, idx) => {
                                return (
                                    <ArtistSearchCard
                                        artists={artists}
                                        key={idx}
                                    />
                                );
                            })}
                        </ol>
                    )}
                </ul>
            </div>
            <ul className="search-btn">
                <li>
                    <button
                        onClick={() => {
                            changePage(-1);
                        }}
                    >
                        Previous
                    </button>
                </li>
                <li>{!queryResult ? <p>#</p> : <p>{page + 1}</p>}</li>
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

export default ArtistSearch;
