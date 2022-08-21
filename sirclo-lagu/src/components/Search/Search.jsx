import { useState } from "react";
import { useEffect } from "react";
import "./search.css";

function Search(props) {
    function SetTextQuery() {
        let searchText = document.getElementById("search-text").value;
        props.setText(searchText);
    }

    return (
        <div className="search">
            <input
                type="text"
                name="query"
                id="search-text"
                placeholder="Type to search..."
            />
            <img onClick={SetTextQuery} src="/search.svg" alt="Search" />
        </div>
    );
}

export default Search;
