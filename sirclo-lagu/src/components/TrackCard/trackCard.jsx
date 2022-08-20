import "./trackCard.css";

function TrackCard(track) {
    return (
        <li className="card">
            <a href={track.track.url}>
                <p className="track-name">{track.track.name}</p>
                <p>{track.track.playcount}</p>
                <p>{track.track.duration}</p>
            </a>
        </li>
    );
}

export default TrackCard;
