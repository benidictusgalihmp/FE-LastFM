function ArtistSearchCard(artists, idx) {
    return (
        <li>
            <a href={artists.url}>
                <img
                    id="artist-img"
                    src={artists.image[2]["#text"]}
                    alt="artist image"
                />
                <p id="name">{artists.name}</p>
                <hr />
                <ul className="content-text">
                    <li>
                        <img
                            src="/headphones.svg"
                            alt="listener"
                            title="Number of listener right now"
                        />
                        <p id="listeners">{artists.listeners}</p>
                    </li>
                </ul>
            </a>
        </li>
    );
}

export default ArtistSearchCard;
