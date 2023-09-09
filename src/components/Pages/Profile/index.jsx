import { Container } from "@mui/material";
import { useMemo } from "react";
import { useRouter } from "next/router";
import UserProfileSidebar from "./Sidebar";
import CBreadCrumb from "components/UI/CBreadCrumb";
import MultipleBreadCrumb from "./MultipleBreadCrumb";
import { CCard } from "components/UI/CCards/CCard";
import { useSelector } from "react-redux";
import UserProfileWaitingPage from "./Pages/Waiting";
import UserProfileViewedPage from "./Pages/Viewed";
import UserProfileCertificatePage from "./Pages/Certificate";
import UserProfilePrivatePage from "./Pages/Private";
import { useIsMobile } from "hooks/useMobile";
import { DoubleChevronIcons } from "components/UI/DoubleChevronIcons";
export default function UserProfileWrapper() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const ipod = useIsMobile("ipod");
  const mobile = useIsMobile("mobile");
  const page = useMemo(() => {
    return router?.query?.page || "";
  }, [router]);

  const CurrentPage = () => {
    if (page === 'viewed') {
      return <UserProfileViewedPage user={user} ipod={ipod} />;
    } else if (page === 'certificate') {
      return <UserProfileCertificatePage user={user} ipod={ipod} />;
    } else if (page === 'private') {
      return <UserProfilePrivatePage user={user} />;
    } else {
      return <UserProfileWaitingPage user={user} mobile={mobile} />;
    }
  };

  const urls = useMemo(() => {
    const data = [
      {
        title: "main_page",
        link: "/",
        iconRight: <DoubleChevronIcons />,
      },
      {
        title: "profile",
        link: "/profile",
      },
    ];
    if (page) {
      data.push({
        title: page,
        iconLeft: <DoubleChevronIcons />,
        link: "",
      });
    }
    return data;
  }, [page]);

  return (
    <Container>
      {ipod ? (
        <MultipleBreadCrumb list={urls} translation="profile" />
      ) : (
        <CBreadCrumb
          current={page ? page : "waiting"}
          classes="my-5"
          translation="profile"
        />
      )}

      {ipod ? (
        <div className="min-h-[720px] mb-10">
          {page ? (
            <CCard classes="w-full">
              <CurrentPage />
            </CCard>
          ) : (
            <CCard classes="w-full">
              <UserProfileSidebar user={user} />
            </CCard>
          )}
        </div>
      ) : (
        <div className="min-h-[100vh] flex gap-4 minDesktop:gap-6 pb-20">
          <CCard classes="w-full ipod:w-[400px] minDesktop:w-[400px]">
            <UserProfileSidebar user={user} />
          </CCard>

          <CCard classes="w-full">
            <CurrentPage />
          </CCard>
        </div>
      )}
    </Container>
  );
}
