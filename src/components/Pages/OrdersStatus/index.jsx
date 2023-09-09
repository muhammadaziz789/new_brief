import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";
import OrderStatusSuccess from "./Success";
import OrderStatusFail from "./Fail";
export default function OrderStatusWrapper() {
  const router = useRouter();

  const queries = useMemo(() => {
    return router?.query;
  }, [router]);

  return (
    <Container className="py-10">
      {queries?.status === "success" ? (
        <OrderStatusSuccess queries={queries} />
      ) : (
        <OrderStatusFail />
      )}
    </Container>
  );
}
