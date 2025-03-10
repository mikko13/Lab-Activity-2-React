import SongItem from "./SongItem";
import { songs } from "./Songs";
import "./SongList.css";

const SongList = () => {
  const updatedSongs = songs.map((song, index) => ({
    ...song,
  }));

  return (
    <div className="song-list">
      {updatedSongs.map((song, index) => (
        <SongItem key={index} {...song} />
      ))}
    </div>
  );
};

export default SongList;