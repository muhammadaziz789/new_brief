import cls from "./style.module.scss";
import React, { useRef, useEffect, useState, useMemo } from "react";
import PlayButton from "../../PlayButton";
import {
  RestartAltRounded,
  PlayCircleFilledWhiteRounded,
  PauseCircleFilledRounded,
} from "@mui/icons-material";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#F1E8FE",
  progressColor: "#5122D6",
  cursorColor: "white",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true,
});
export const LiveSection = ({ podcast }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(podcast.audio);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };
  const resetAudio = () => {
    // setPlaying(false);
    // wavesurfer.current.pause();
    wavesurfer.current.seekTo(0);
  };
  return (
    <div className={`${cls.liveSection} w-[90%] tablet:h-[145px]`}>
      <div className={cls.wrapper}>
        <div className={cls.content}>
          <img className={cls.img} src={podcast.image} alt="owner" />
          <div className={cls.text}>
            <h4 className={cls.title}>{podcast.title}</h4>
            <h5 className={cls.name}>{podcast.author}</h5>
          </div>
        </div>
        {podcast.audio && (
          <div className={cls.stream}>
            <PlayButton handleClick={resetAudio}>
              <RestartAltRounded style={{ color: "#5122D6" }} />
            </PlayButton>
            <PlayButton handleClick={handlePlayPause}>
              {playing ? (
                <PauseCircleFilledRounded style={{ color: "#5122D6bb" }} />
              ) : (
                <PlayCircleFilledWhiteRounded style={{ color: "#5122D6bb" }} />
              )}
            </PlayButton>

            <div className="w-[180px] ipod:w-[240px]">
              <div id="waveform" ref={waveformRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
