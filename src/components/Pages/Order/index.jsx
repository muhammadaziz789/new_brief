import { Container } from "@mui/material";
import OrderCreate from "./Create";
import CBreadCrumb from "components/UI/CBreadCrumb";

export default function OrderPageWrapper() {
  return (
    <Container>
      <CBreadCrumb
        classes="py-5"
        where="back_to"
        current={"officialization_order"}
        back={true}
      />
      <OrderCreate />
    </Container>
  );
}
