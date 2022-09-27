import "./trackCard.css";
import CurrencyFormatter from "../../module/currencyFormatter";

function TrackCard({ track, idx }) {
    return (
        <li className="card">
            <a href={track.url} target="_blank">
                <p>{idx}</p>
                <p className="title">{track.name}</p>
                <p>{CurrencyFormatter(track.listeners)}</p>
                <p>{CurrencyFormatter(track.playcount)}</p>
            </a>
        </li>
    );
}

export default TrackCard;
