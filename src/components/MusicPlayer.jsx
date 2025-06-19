import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Auto-play bloqueado. El usuario debe interactuar.");
      }
    };
    playMusic();
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-xl z-50">
      <audio id="app-audio" ref={audioRef} src="/Rose_Ft_Bruno_Mars_-_APT.mp3" loop />
      <button onClick={toggleMusic}>
        {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}