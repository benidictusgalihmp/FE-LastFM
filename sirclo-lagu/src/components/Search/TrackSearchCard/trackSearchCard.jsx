import "../searchCard.css";

function TrackSearchCard({ tracks }) {
    return (
        <li>
            <a href={tracks.url} target="_blank">
                <img src={tracks.image[2]["#text"]} alt="track image" />
                <div className="status">
                    <p className="titles">{tracks.name}</p>
                    <p>By {tracks.artist}</p>
                    <ul className="status-listeners">
                        <li>
                            <img src="/headphones.svg" alt="headphone" />
                        </li>
                        <li>
                            <p>{tracks.listeners}</p>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
    );
}

export default TrackSearchCard;
