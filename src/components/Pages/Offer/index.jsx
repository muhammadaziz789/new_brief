import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { UzOfferText } from "./UzOfferText";
import { OzOfferText } from "./OzOfferText";
import CBreadCrumb from "components/UI/CBreadCrumb";
export default function OfferPageWrapper() {
  const { lang } = useTranslation("common");
  return (
    <Container>
      <CBreadCrumb
        classes="pt-6"
        where="back_to"
        current={"offerta"}
        back={true}
      />
      <div className="py-6">
        {lang === "uz" ? <UzOfferText /> : <OzOfferText />}
      </div>
    </Container>
  );
}
