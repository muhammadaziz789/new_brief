import CModal from "components/UI/CModal";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "store/website/websiteSlice";
import YouTube from "react-youtube";
import { useRef } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useIsMobile } from "hooks/useMobile";
export default function YoutubeVidoeModal() {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.website.youtubeVideoModalOpen);
  const videoRef = useRef(null);
  const mobile = useIsMobile("mobile");
  const options = {
    height: "100vh",
    width: "100vw",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      iv_load_policy: 3,
    },
  };

  const _onReady = (e) => {
    // const player = event.target;
    // player.playVideo();
  };

  function closeModal() {
    dispatch(websiteActions.setYoutubeVideoModal(null));
  }

  return (
    <CModal
      width={mobile ? "95vw" : "80vw"}
      header={false}
      footer={false}
      onClose={closeModal}
      cardClasses="border-none bg-transparent p-[0]"
    >
      <div id="youtubeVidoe">
        <div onClick={() => closeModal()} className="clearBtn">
          <ClearRoundedIcon />
        </div>
        {modalData?.id ? (
          <YouTube
            videoId={modalData.id}
            opts={options}
            onReady={_onReady}
            ref={videoRef}
            allowFullScreen
          />
        ) : (
          <div className="rounded-[10px] bg-white h-[460px] mobile:h-[80vh] flex justify-center items-center flex-col">
            <img width={200} src="/images/no-data.png" alt="Video topilmadi" />
            <h1 className="text-dark text-2xl mt-4">Video yuklanmagan!</h1>
          </div>
        )}
      </div>
    </CModal>
  );
}
