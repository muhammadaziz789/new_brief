import { Main } from "components/Pages/Home/Main";
import WaitingSeminar from "components/Pages/Home/WaitingSeminar";
import Seminars from "components/Pages/Home/Seminars";
import FeedbackSection from "./Feedback";
export default function HomePageWrapper() {
  return (
    <>
      <Main />
      <WaitingSeminar type="seminar" />
      <Seminars />
      <FeedbackSection />
    </>
  );
}
