import { request } from "services/http-client";

const seminarService = {
  getList: (params) => request.get(`/seminars`, { params }),
  getSeminar: (slug) => request.get(`/seminars/${slug}`),
  getUserSeminarsList: (data) => request.get("/user/seminars"),
  postUserSertificate: (id) => request.post(`/user/seminars/${id}/certificate`),
};

export default seminarService;
