import cls from "./style.module.scss";
import React, { useRef, useEffect, useState, useMemo } from "react";
import PlayButton from "../../PlayButton";
import {
  PlayCircleFilledWhiteRounded,
  PauseCircleFilledRounded,
  RestartAltRounded,
} from "@mui/icons-material";
import CSkeleton from "components/UI/CSkeleton";
import { getSubstring } from "utils/getSubstring";

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
  const [loading, setLoading] = useState(true);
  const [activeMarq, setActiveMarq] = useState(false);

  useEffect(() => {
    create();
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(podcast.audio);
  };

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
    wavesurfer.current.playPause();
  };
  const resetAudio = () => {
    // setPlaying(false);
    // wavesurfer.current.pause();
    wavesurfer.current.seekTo(0);
  };

  function handleMarqueeAction(status) {
    setActiveMarq(status);
  }

  const ExtraSkeleton = () => (
    <div className="absolute left-0 top-1/2 -translate-y-1/2">
      <CSkeleton
        skeletonClasses="bg-[#F1E8FE]"
        isArray={false}
        width={300}
        height={40}
      />
    </div>
  );
  return (
    <div className={`${cls.liveSection} w-[970px] h-[145px]`}>
      <div className={cls.wrapper}>
        <div className={cls.content}>
          <img className={cls.img} src={podcast.image} alt="owner" />
          <div className={cls.text}>
            <div
              onMouseEnter={() => handleMarqueeAction(true)}
              onMouseLeave={() => handleMarqueeAction(false)}
            >
              {!activeMarq ? (
                <marquee scrolldelay="70" style={{ marqueeStart: "50%" }}>
                  <h4 className={cls.title}>{podcast.title}</h4>
                </marquee>
              ) : (
                <h4 className={cls.title}>{getSubstring(podcast.title, 25)}</h4>
              )}
            </div>

            <h5 className={cls.name}>{podcast.author}</h5>
          </div>
        </div>
        {podcast.audio && (
          <div className={cls.stream}>
            {!loading && (
              <div className={cls.buttons}>
                <PlayButton handleClick={resetAudio}>
                  <RestartAltRounded style={{ color: "#5122D6" }} />
                </PlayButton>
                <PlayButton handleClick={handlePlayPause}>
                  {playing ? (
                    <PauseCircleFilledRounded style={{ color: "#5122D6bb" }} />
                  ) : (
                    <PlayCircleFilledWhiteRounded
                      style={{ color: "#5122D6bb" }}
                    />
                  )}
                </PlayButton>
              </div>
            )}

            <div className="relative">
              {loading ? <ExtraSkeleton /> : ""}
              <div className="w-[250px]">
                <div id="waveform" ref={waveformRef} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
