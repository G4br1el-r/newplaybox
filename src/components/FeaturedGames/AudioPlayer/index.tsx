import { useRef, forwardRef, useImperativeHandle } from "react";

interface AudioPlayerProps {
  src: string;
  type?: string;
}

export interface AudioPlayerRef {
  play: () => void;
}

export const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(
  ({ src, type = "audio/wav" }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current
            .play()
            .catch((e) => console.log("Erro ao tocar som:", e));
        }
      },
    }));

    return (
      <audio ref={audioRef} preload="auto">
        <source src={src} type={type} />
      </audio>
    );
  },
);

AudioPlayer.displayName = "AudioPlayer";
