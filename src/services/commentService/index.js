import { request } from "services/http-client";

const commentService = {
    getList: (params) => request.get("/comments", { params }),
    getListReplies: (id, params) => request.get(`/comments/${id}`, { params }),
    checkComment: (data) => request.post('/comments/check', data),
    createElement: (data) => request.post('/comments', data),
    likeComment: (data) => request.post('/comments/like', data),
    deleteElement: (id) => request.delete(`/comments/${id}`)
}

export default commentService