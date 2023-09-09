import { AccountIcons, Like, DisLike, HeartFilledIcon } from "components/svg";

import cls from "./style.module.scss";
import { useState } from "react";
import { CircularProgress, Collapse } from "@mui/material";
import SendComment from "./sendComment";
import {
  ArrowDropUp,
  ArrowDropDown,
  ReplyRounded,
  WorkspacePremiumRounded,
  DeleteOutlineRounded,
} from "@mui/icons-material";
import useTranslation from "next-translate/useTranslation";
import { useIsMobile } from "hooks/useMobile";
import SendCommentChild from "./sendCommentChild";

export default function Comment({
  element,
  handleLike = () => {},
  getReplies = () => {},
  parent_id,
  getCommentListChild,
  seminar_id,
  setLoading,
  handleDeleteComment = () => {},
  isAdmin,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openReplyOpen, setReplyOpen] = useState(false);
  const { t } = useTranslation("common");
  const small = useIsMobile("small");
  return (
    <div className={cls.comment}>
      <div className={cls.avatar}>
        {element?.user?.avatar ? (
          <div className="w-[30px] h-[30px] small:w-[36px] small:h-[36px]">
            <img
              className="w-[30px] h-[30px] small:w-[36px] small:h-[36px] rounded-full object-cover border border-border"
              src={element?.user?.avatar}
              alt={element?.user?.avatar || "image"}
            />
          </div>
        ) : (
          <AccountIcons classes="w-[30px] tablet:w-[36px]" />
        )}
      </div>
      <div className={cls.text}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h4 className={cls.title}>{element.user?.full_name}</h4>
            {element?.user?.is_admin && (
              <WorkspacePremiumRounded
                style={{ color: "#5122D6", marginLeft: "8px" }}
              />
            )}
          </div>
          {isAdmin && (
            <div className="cursor-pointer hover:scale-[1.2] duration-200">
              <DeleteOutlineRounded
                onClick={() => handleDeleteComment(element?.id)}
                style={{ color: "#ed0101" }}
              />
            </div>
          )}
        </div>
        <p className={cls.comment}>{element.comment_text}</p>
        <div className={cls.box}>
          <div
            onClick={() => handleLike(1, element.id)}
            className="mr-4 cursor-pointer flex items-center"
          >
            <Like fill={element?.is_liked ? "#ed0101" : "none"} />
            {element?.liked_count > 0 && (
              <span className="text-sm font-medium ml-2">
                {element?.liked_count}
              </span>
            )}
          </div>
          <div
            onClick={() => handleLike(0, element.id)}
            className="cursor-pointer"
          >
            <DisLike fill={element?.is_disliked ? "#111" : "none"} />
          </div>
          {element?.is_admin_liked && (
            <div className="bg-[#EDF1F9] py-1 px-[10px] rounded-full ml-3 flex items-center gap-[6px]">
              <HeartFilledIcon />
              {!small && (
                <span className="text-[12px] small:text-base visible">
                  {t("liked_by_admin")}
                </span>
              )}
            </div>
          )}
          {!element?.parent_id && (
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="ml-2 mobile:ml-3 ml-auto text-[10px] mobile:text-sm font-medium text-[12px] small:text-base"
            >
              {t("reply")}
            </button>
          )}
        </div>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <SendCommentChild
            seminar_id={seminar_id}
            parenet_id={parent_id}
            setIsOpen={setIsOpen}
            setReplyOpen={setReplyOpen}
            getCommentListChild={getCommentListChild}
            setLoading={setLoading}
          />
        </Collapse>

        {element?.replies?.length > 0 && (
          <div
            onClick={() => setReplyOpen((prev) => !prev)}
            className="bg-[#F4F4F4] inline-flex px-3 py-[4px] rounded-full text-sm font-[600] my-5 cursor-pointer"
          >
            <span className="text-ink">
              {element?.reply_count} {t("replies")}
            </span>
            {openReplyOpen ? <ArrowDropUp /> : <ArrowDropDown />}
          </div>
        )}

        {openReplyOpen && (
          <>
            {/* {loading && (
              <div className="flex justify-center">
                <CircularProgress style={{ color: "#8b99af" }} size={25} />
              </div>
            )} */}
            {element?.replies?.map((item) => (
              <Comment
                seminar_id={seminar_id}
                key={item.id}
                element={item}
                parent_id={parent_id}
                handleLike={handleLike}
                setLoading={setLoading}
                handleDeleteComment={handleDeleteComment}
                isAdmin={isAdmin}
              />
            ))}
            {element?.reply_count > element?.replies?.length && (
              <p
                onClick={() => getReplies(parent_id)}
                className="mb-5 text-ink cursor-pointer text-sm font-medium inline-block"
              >
                <ReplyRounded style={{ color: "#5122d6" }} />
                {t("show_more")}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
