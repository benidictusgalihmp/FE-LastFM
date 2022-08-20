import { useState } from "react";
import { useEffect } from "react";

function Search(props) {
    function SetTextQuery() {
        let searchText = document.getElementById("search-text").value;
        props.setText(searchText);
    }

    return (
        <div>
            <input type="text" name="query" id="search-text" required />
            <img onClick={SetTextQuery} src="/search.svg" alt="Search" />
        </div>
    );
}

export default Search;
