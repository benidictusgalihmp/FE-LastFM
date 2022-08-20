import "./trackCard.css";

function TrackCard({ track }) {
    return (
        <li className="card">
            <a href={track.url}>
                <p className="track-name">{track.name}</p>
                <p>{track.playcount}</p>
                <p>{track.duration}</p>
            </a>
        </li>
    );
}

export default TrackCard;
