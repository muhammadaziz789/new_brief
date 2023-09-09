import { useMutation, useQuery } from "react-query";
import cls from "./style.module.scss";
import commentService from "services/commentService";
import { useEffect, useMemo, useState } from "react";
import Comment from "./comment";
import SendComment from "./sendComment";
import useTranslation from "next-translate/useTranslation";
import InfiniteScroll from "react-infinite-scroll-component";
import { CCard } from "components/UI/CCards/CCard";
import { websiteActions } from "store/website/websiteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useIsMobile } from "hooks/useMobile";

export default function Comments({ seminar, setCamantable = () => {} }) {
  const { t, lang } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({});
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [repliesParam, setRepliesParam] = useState({ page: 1, limit: 10 });
  const [activeReply, setActiveReply] = useState(false);
  const [checkCommentData, setCheckCommentData] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const mobile = useIsMobile("mobile");

  const checkComment = useMutation({
    mutationFn: (data) => {
      return commentService.checkComment(data);
    },
    onSuccess: (val) => {
      setCheckCommentData(val);
    },
  });

  useEffect(() => {
    if (seminar?.id) {
      checkComment.mutate({ seminar_id: seminar?.id });
    }
  }, [seminar]);

  function getCommentList(props) {
    if (!props?.seminar_id) return;
    const params = {
      ...props,
      limit: 10,
    };
    commentService.getList(params).then((res) => {
      if (!res?.comments?.length) return;
      setCount(res?.total);
      if (params.page < 2) {
        setList(res.comments);
      } else {
        setList((prev) => [...prev, res.comments]);
      }
    });
  }

  function getReplies(parent_id) {
    if (!parent_id) return;
    const page = repliesParam.page++;
    const prmt = { ...repliesParam, page: page + 1 };
    setRepliesParam(prmt);

    commentService.getListReplies(parent_id, prmt).then((res) => {
      if (!res?.comments) return;
      const reply = res.comments[0];
      list.find((i) => i.id === reply.parent_id)?.replies.push(reply);
      setList(list);
      setActiveReply(true);
    });
  }

  const postComment = useMutation({
    mutationFn: (data) => {
      return commentService.createElement(data);
    },
    onSuccess: (val) => {
      params.page = 1;
      getCommentList(params);
    },
  });

  const likeCommentFn = useMutation({
    mutationFn: (data) => {
      return commentService.likeComment(data);
    },
    onSuccess: (val) => {
      params.page = 1;
      getCommentList(params);
    },
  });

  function createComment(props) {
    const data = {
      seminar_id: seminar.id,
      comment_text: props.comment,
      parent_id: "",
    };
    if (props.from === "send") {
      postComment.mutate(data);
    }
  }

  function handleLike(evt, id) {
    const data = {
      like: evt,
      comment_id: id,
    };
    likeCommentFn.mutate(data);
  }

  function handleDeleteComment(id) {
    commentService.deleteElement(id).then(() => {
      dispatch(websiteActions.setAlertData({ title: "comment_deleted" }));
      params.page = 1;
      getCommentList(params);
    });
  }

  useEffect(() => {
    if (!seminar?.id) return;
    const data = {
      seminar_id: seminar.id,
      page: 1,
    };
    if (params?.seminar_id) return;
    setParams(data);
    getCommentList(data);
  }, [seminar, params]);

  const handleScroll = () => {
    const page = params.page++;
    const prmt = { ...params, page: page + 1 };
    setParams(prmt);
    getCommentList(prmt);
  };

  useEffect(() => {
    if (checkCommentData?.is_commentable) {
      setCamantable(true);
    }
  }, [checkCommentData, setCamantable]);

  function getCommentList2(props) {
    if (!props?.seminar_id) return;
    const params = {
      ...props,
      limit: 10,
    };
    commentService.getList(params).then((res) => {
      if (!res?.comments?.length) return;
      setCount(res?.total);
      if (params.page < 2) {
        setList(res.comments);
      } else {
        setList((prev) => [res.comments, ...prev]);
      }
    });
  }

  useEffect(() => {
    if (checkCommentData?.is_live) {
      const data = {
        seminar_id: seminar.id,
        page: 1,
      };
      const interval = setInterval(() => {
        getCommentList2(data);
      }, 7000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seminar, checkCommentData]);

  return (
    <>
      {checkCommentData?.is_commentable && (
        <CCard classes={mobile ? "p-2" : ""}>
          <div className={cls.wrapper}>
            <h1 className={cls.title}>
              {t("comments_count")}: {count} {lang === "oz" ? "та" : "ta"}
            </h1>
            <div className="mb-5">
              <SendComment createComment={createComment} loading={loading} />
            </div>

            <InfiniteScroll
              dataLength={list?.length || 1}
              style={{ overflow: "visible" }}
              next={() => {
                handleScroll();
              }}
              hasMore={true}
              // loader={<h1>loading</h1>}
            >
              {list?.map((item, index) => (
                <div key={index}>
                  {item?.id && (
                    <Comment
                      seminar_id={seminar.id}
                      element={item}
                      handleLike={handleLike}
                      parent_id={item.id}
                      loading={loading}
                      getReplies={getReplies}
                      getCommentListChild={() => {
                        params.page = 1;
                        getCommentList(params);
                      }}
                      setLoading={setLoading}
                      handleDeleteComment={handleDeleteComment}
                      isAdmin={user?.is_admin}
                    />
                  )}
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </CCard>
      )}
    </>
  );
}
