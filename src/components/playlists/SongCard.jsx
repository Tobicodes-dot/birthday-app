import { useEffect, useRef, useState } from "react";
import { playlist } from "../../data/playlist";
import { IoPlay, IoPause } from "react-icons/io5";
import "../../styles/vinyl.css";

const SongCard = () => {
  const audioRef = useRef(new Audio());
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);

  const playSong = (song) => {
    if (current?.id === song.id) {
      playing ? audioRef.current.pause() : audioRef.current.play();
      setPlaying(!playing);
      return;
    }

    audioRef.current.pause();
    audioRef.current.src = song.audio;
    audioRef.current.play();

    setCurrent(song);
    setPlaying(true);
  };

  // Auto-play next song
  useEffect(() => {
    audioRef.current.onended = () => {
      const index = playlist.findIndex(s => s.id === current.id);
      const next = playlist[index + 1];
      if (next) playSong(next);
    };
  }, [current]);

  return (
    <div className="h-screen px-6 pt-10 pb-28 bg-linear-to-b from-white to-[#FFE9F1]">
      <h1 className="text-3xl text-center mb-10 text-[#FF4D94] font-semibold">
        Songs That Feel Like You
      </h1>

      <div className="space-y-6">
        {playlist.map((song) => {
          const isActive = current?.id === song.id && playing;

          return (
            <div
              key={song.id}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow"
            >
              {/* VINYL */}
              <div
                className={`w-16 h-16 vinyl ${
                  !isActive && "vinyl-paused"
                } ${isActive && "glow"}`}
                style={{
                  backgroundImage: `url(${song.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-500">{song.artist}</p>
                <p className="text-xs mt-1 italic text-pink-400">
                  {song.reason}
                </p>
              </div>

              {/* PLAY BUTTON */}
              <button
                onClick={() => playSong(song)}
                className="text-[#FF4D94] text-2xl"
              >
                {isActive ? <IoPause /> : <IoPlay />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongCard;
