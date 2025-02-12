const SongItem = (props) => (
  <div className="song-item">
    <img src={props.image} alt={props.title} />
    <div className="song-info">
      <p className="song-title">{props.title}</p>
      <span className="song-artist">{props.artist}</span>
    </div>
  </div>
);

export default SongItem;
