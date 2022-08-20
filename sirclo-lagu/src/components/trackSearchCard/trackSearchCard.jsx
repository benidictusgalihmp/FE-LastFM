function TrackSearchCard({ searchTrack }) {
    console.log(searchTrack);
    return (
        <li className="card">
            <a href={searchTrack.trackmatches.track.url}>
                <p className="track-name">
                    {searchTrack.trackmatches.track.name}
                </p>
                <p>{searchTrack.trackmatches.track.playcount}</p>
                <p>{searchTrack.trackmatches.track.duration}</p>
            </a>
        </li>
    );
}

export default TrackSearchCard;
