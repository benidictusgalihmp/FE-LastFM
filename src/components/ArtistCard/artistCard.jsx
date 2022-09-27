import "./artistCard.css";
import CurrencyFormatter from "../../module/currencyFormatter";

function ArtistCard({ artists, idx }) {
    return (
        <li id="card">
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
                        <p id="listeners">
                            {CurrencyFormatter(artists.listeners)}
                        </p>
                    </li>
                    <li>
                        <img
                            src="/play-circle.svg"
                            alt="playcount"
                            title="How many playcount"
                        />
                        <p id="playcount">
                            {CurrencyFormatter(artists.playcount)}
                        </p>
                    </li>
                </ul>
            </a>
            <p id="rank">#{idx + 1}</p>
        </li>
    );
}

export default ArtistCard;
