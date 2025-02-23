const SongItem = (props) => {
  if (!props.image || !props.title || !props.artist) {
    return null;
  }

  const isTrending = props.isTrending || false;

  return (
    <div
      className={`song-item ${isTrending ? "trending" : ""}`}
      style={{
        backgroundColor: isTrending ? "#2a2a2a" : "#1a1a1a",
        border: isTrending ? "2px solid #1e90ff" : "1px solid #333",
        boxShadow: isTrending ? "0 4px 8px rgba(30, 144, 255, 0.3)" : "none",
        transform: isTrending ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <img src={props.image} alt={props.title} />
      <div className="song-info">
        <p className="song-title">{props.title}</p>
        <span className="song-artist">{props.artist}</span>
      </div>
      {isTrending && (
        <div className="trending-label">
          <span>Trending</span>
        </div>
      )}
    </div>
  );
};

export default SongItem;
