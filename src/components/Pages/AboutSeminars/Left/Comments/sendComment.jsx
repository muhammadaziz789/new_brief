import { AccountIcons } from "components/svg";
import cls from "./style.module.scss";
import { useSelector } from "react-redux";
import { SendIcon } from "components/svg";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useIsMobile } from "hooks/useMobile";

export default function SendComment({
  parenet_id,
  createComment = () => {},
  setIsOpen = () => {},
  setReplyOpen = () => {},
  loading,
}) {
  const user = useSelector((state) => state.auth.user);
  const [currentText, setCurrentText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const mobile = useIsMobile("mobile");
  const inputRef = useRef(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [currentText]);

  const handleKeyPress = (event) => {
    // handle keypress event here
    if (event.key === "Enter" && currentText && inputRef.current.value) {
      handleCreate();
    }
  };

  function handleCreate() {
    const data = {
      comment: currentText,
      from: "send",
    };
    if (parenet_id) {
      data.parent_id = parenet_id;
    }
    createComment(data);
    inputRef.current.value = "";
    setCurrentText("");
    setReplyOpen(true);
    setIsOpen(false);
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (parenet_id) {
      inputRef.current.focus();
    }
  }, [parenet_id]);

  function handleEmoji(val) {
    setCurrentText((prev) => prev + val.emoji);
  }

  return (
    <div className={cls.sendwrapper}>
      <div className={cls.avatar}>
        {user?.image ? (
          <div className="w-[36px] h-[36px] tablet:w-[44px] tablet:h-[44px]">
            <img
              className="w-[36px] h-[36px] tablet:w-[44px] tablet:h-[44px] rounded-full object-cover"
              src={user?.image}
              alt={user?.image}
            />
          </div>
        ) : (
          <AccountIcons classes="w-[36px] tablet:w-[44px]" />
        )}
      </div>

      <div className={`${cls.input} ${isFocused ? cls.focused : ""}`}>
        <input
          ref={inputRef}
          onChange={(e) => setCurrentText(e.target.value)}
          value={currentText}
          type="text"
          className="w-full h-[44px] pr-4"
          placeholder="Fikringizni yozib qoldiring"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="flex items-center gap-1 mobile:gap-3">
          <span
            onClick={() => setOpenEmoji((prev) => !prev)}
            className="text-2xl cursor-pointer"
          >
            🙂
          </span>
          <div className="cursor-pointer" onClick={() => handleCreate()}>
            <SendIcon />
          </div>
        </div>

        {openEmoji && (
          <div className="absolute bottom-10 right-0 mobile:right-[40px] z-[98]">
            <EmojiPicker
              width={mobile ? 240 : 350}
              onEmojiClick={handleEmoji}
              autoFocusSearch={false}
            />
          </div>
        )}

        {openEmoji && (
          <div
            onMouseEnter={(e) => {
              if (!mobile && e.target !== emojiRef.current) {
                inputRef.current.focus();
                setOpenEmoji(false);
              }
            }}
            onClick={() => {
              inputRef.current.focus();
              setOpenEmoji(false);
            }}
            className="w-full h-full fixed left-0 top-0 z-[96]"
          ></div>
        )}
        {openEmoji && !mobile && (
          <div
            ref={emojiRef}
            className="w-[500px] h-[500px] absolute -bottom-20 -right-10 z-[97]"
          ></div>
        )}
      </div>
    </div>
  );
}