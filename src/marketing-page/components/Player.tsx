import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => (
  <div className="custom-audio-player">
    <AudioPlayer
      autoPlay
      volume={0.8}
      showSkipControls
      progressUpdateInterval={100}
      src="https://assets.alllq.in/prod/AQ/content/audios/EnglishFluency/U1/A5/6-3-te.mp3"
    />
  </div>
);

export default Player;
