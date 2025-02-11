import "./Header.css";
import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaRedo,
  FaVolumeUp,
  FaUser,
  FaRandom,
  FaMusic,
} from "react-icons/fa";
import AppleLogo from "../assets/AppleLogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="music-controls">
        <button className="icon1">
          <FaRandom />
        </button>

        <button className="icon2">
          <FaStepBackward />
        </button>
        <button className="icon3">
          <FaPlay />
        </button>
        <button className="icon4">
          <FaStepForward />
        </button>
        <button className="icon5">
          <FaRedo />
        </button>
      </div>

      <div className="logo">
        <div className="music-note-container">
          <FaMusic className="music-note" />
        </div>
        <img className="applelogo2" src={AppleLogo} alt="Apple Logo" />
      </div>

      <div className="right-section">
        <FaVolumeUp className="volume-icon" />
        <input type="range" className="volume-slider" />
        <button className="playlist-btn">☰</button>
        <button className="sign-in-btn">
          <FaUser /> Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
