import "./trackCard.css";

function TrackCard({ track, idx }) {
    return (
        <li className="card">
            <a href={track.url} target="_blank">
                <p>{idx}</p>
                <p className="title">{track.name}</p>
                <p>{track.playcount}</p>
                <p>{track.playcount}</p>
            </a>
        </li>
    );
}

export default TrackCard;
