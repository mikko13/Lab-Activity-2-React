import SongItem from "./SongItem";
import {songs} from "./Songs";
import "./SongList.css";

const SongList = () => (
  <div className="song-list">
    {songs.map((song, index) => (
      <SongItem key={index} {...song} />
    ))}
  </div>
);

export default SongList;
