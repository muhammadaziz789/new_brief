import { Container } from "@mui/material";
import AboutContentUz from "./Content/Uz";
import AboutContentOz from "./Content/Oz";
import useTranslation from "next-translate/useTranslation";
export default function AboutPageWrapper() {
  const { lang } = useTranslation("common");
  return (
    <Container>
      <div className="pt-10 pb-20">
        {lang === "oz" ? <AboutContentOz /> : <AboutContentUz />}
      </div>
    </Container>
  );
}
