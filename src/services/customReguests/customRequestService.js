import { request } from "services/http-client";

const customRequestService = {
  getPaymenyLogos: () =>
    request.get(`/https://fway.uz/wp-content/uploads/2022/06/card-logos.png`),
  getFeedbackList: () => request.get(`/feedbacks`),
  getPodcast: () => request.get(`podcast`),
  getStatistics: () => request.get(`statistics`),
};

export default customRequestService;
