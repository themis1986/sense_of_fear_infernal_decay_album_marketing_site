import { forwardRef, useImperativeHandle, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface PlayerProps {
  src: string;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
}

export interface PlayerHandle {
  play: () => void;
  pause: () => void;
  audioElement: HTMLAudioElement | null;
}

const Player = forwardRef<PlayerHandle, PlayerProps>(
  ({ src, onClickNext, onClickPrevious }, ref) => {
    const playerRef = useRef<AudioPlayer>(null);

    useImperativeHandle(ref, () => ({
      play: () => playerRef.current?.audio?.current?.play(),
      pause: () => playerRef.current?.audio?.current?.pause(),
      audioElement: playerRef.current?.audio?.current || null,
    }));

    return (
      <div className="custom-audio-player">
        <AudioPlayer
          ref={playerRef}
          autoPlay
          volume={0.8}
          showSkipControls
          showJumpControls
          progressUpdateInterval={100}
          src={src}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
        />
      </div>
    );
  }
);

Player.displayName = "Player";

export default Player;
