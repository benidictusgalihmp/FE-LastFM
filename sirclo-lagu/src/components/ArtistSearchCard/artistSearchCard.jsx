function ArtistSearchCard({ artists }) {
    return (
        <li>
            <a href={artists.url} target="_blank">
                <img src={artists.image[2]["#text"]} alt="artist image" />
                <div className="status">
                    <p className="titles">{artists.name}</p>
                    <ul className="status-listeners">
                        <li>
                            <img
                                src="/headphones.svg"
                                alt="headphone"
                                title="Number of listener right now"
                            />
                        </li>
                        <li>
                            <p>{artists.listeners}</p>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
    );
}

export default ArtistSearchCard;
