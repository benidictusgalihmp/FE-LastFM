import "./artistCard.css";

function ArtistCard({ artists, idx }) {
    return (
        <li className="content">
            <a href={artists.url}>
                <div>
                    <img
                        id="artist-img"
                        src={artists.image[2]["#text"]}
                        alt="artist image"
                    />
                    <p id="name">{artists.name}</p>
                    <ul className="content-text">
                        <li>
                            <img
                                src="/headphones.svg"
                                alt="listener"
                                role="img"
                            />
                            <p id="listeners">{artists.listeners}</p>
                        </li>
                        <li>
                            <img src="/play-circle.svg" alt="playcount" />
                            <p id="playcount">{artists.playcount}</p>
                        </li>
                    </ul>
                </div>
            </a>
            <p>#{idx + 1}</p>
        </li>
    );
}

export default ArtistCard;
