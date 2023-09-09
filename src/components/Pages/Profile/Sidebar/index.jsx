import { useMemo } from "react";
import { useRouter } from "next/router";
import CDivider from "components/UI/CDivider";
import OptimizeQuery from "utils/optimizeQuery";
import { useSelector, useDispatch } from "react-redux";
import { setLogoutModalOpen } from "store/registrationModal/registrationModal.slice";
import {
  WaitingIcon,
  VideoIcon,
  CertificateIcon,
  UserIcon,
  LogoutIcon,
} from "components/svg";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import { MenuItem } from "@mui/material";
import { useCallback } from "react";
import { useIsMobile } from "hooks/useMobile";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import useTranslation from "next-translate/useTranslation";
import useAuth from "services/auth";
import { setUser } from "store/auth/auth.slice";
import { websiteActions } from "store/website/websiteSlice";
export default function UserProfileSidebar({ user, classes }) {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch();
  const ipod = useIsMobile("ipod");
  const router = useRouter();
  let queries = { ...router.query };
  const { UploadUserImage } = useAuth({
    userImageQueryProps: {
      onSuccess: (value) => {
        if (value?.message) {
          dispatch(setUser(null));
          handleAlertActions();
        }
      },
    },
  });

  function handleAlertActions() {
    dispatch(
      websiteActions.setAlertData({
        title: "profile_image_updated",
        translation: "profile",
      })
    );
  }

  const logoutModalOpen = useSelector(
    (state) => state.registrationModal.logoutModalOpen
  );
  const currentPage = useMemo(() => {
    return router.query?.page || "";
  }, [router.query]);

  function handlePagesRoute(link) {
    queries.page = link ? link : "";
    router.push({ path: "/profile", query: { ...OptimizeQuery(queries) } });
  }

  const IconStyles = useMemo(() => {
    return {
      fontSize: "24px",
    };
  }, []);

  const getIconfill = useCallback(
    (status) => {
      if (ipod) {
        return "#5122D6";
      } else {
        if (currentPage === status) {
          return "#fff";
        } else {
          return "#5122D6";
        }
      }
    },
    [currentPage, ipod]
  );

  const getStatusColor = useCallback(
    (status) => {
      if (ipod) {
        return "#F3F6F8";
      } else {
        if (currentPage === status) {
          return "#5122D6";
        } else {
          return "#fff";
        }
      }
    },
    [currentPage, ipod]
  );

  const sidebarList = useMemo(() => {
    const result = [
      {
        icon: <WaitingIcon style={IconStyles} fill={getIconfill("")} />,
        title: `waiting`,
        link: ipod ? "waiting" : "",
      },
      {
        icon: <VideoIcon style={IconStyles} fill={getIconfill("viewed")} />,
        title: `viewed`,
        link: "viewed",
      },
      {
        icon: (
          <CertificateIcon
            style={IconStyles}
            fill={getIconfill("certificate")}
          />
        ),
        title: `certificate`,
        link: "certificate",
      },
      {
        icon: <UserIcon style={IconStyles} fill={getIconfill("private")} />,
        title: `private`,
        link: "private",
      },
    ];
    return result;
  }, [IconStyles, getIconfill, ipod]);

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    UploadUserImage.mutate(formData);
  };

  return (
    <>
      <img src="/images/profile-background.png" alt="" className="m-0 w-full" />
      <div className="w-[100px] h-[100px] bg-borderLighter rounded-full mx-auto mt-[-50px] z-[2] overflow-hidden relative">
        <label
          htmlFor="upload-image"
          className="cursor-pointer w-full h-full flex items-center justify-center"
        >
          {user?.image ? (
            <img
              className="w-[80px] h-[80px] rounded-full object-cover"
              src={user?.image}
              alt={user?.image}
            />
          ) : (
            <CloudDownloadRoundedIcon
              style={{ fontSize: "50px", color: "#5122D6" }}
            />
          )}
        </label>

        <input
          id="upload-image"
          onChange={handleProfileImageUpload}
          accept="image/png, image/jpeg, image/jpg"
          type="file"
          name="profileImage"
          className="invisible"
        />
      </div>
      <div>
        <h3 className="text-dark text-xl font-[700] my-4 text-center">
          {`${user?.first_name || "Name"} ${user?.last_name || "Surname"}`}
        </h3>
        <CDivider color="#F2F4F8" />
        <h4 className="text-grayThirdDarker text-[12px] font-[600] uppercase mb-4">
          {t("management")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {sidebarList.map((item, ind) => (
            <MenuItem
              key={ind}
              onClick={(e) => {
                e.preventDefault();
                handlePagesRoute(item?.link);
              }}
              className={`h-[48px]`}
              style={{
                borderRadius: "10px",
                background: getStatusColor(item?.link),
              }}
            >
              <div className="w-full flex items-center gap-[10px]">
                <div className="w-[24px]">{item.icon}</div>
                <span
                  className={`text-grayFourth font-medium ${
                    !ipod && currentPage === item?.link ? "text-light" : ""
                  }`}
                >
                  {t(item.title)}
                </span>
              </div>
              {ipod && (
                <ArrowForwardIosRoundedIcon
                  style={{ color: "#8E96A0", fontSize: "20px" }}
                />
              )}
            </MenuItem>
          ))}
        </div>
        <CDivider color="#F2F4F8" />
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            dispatch(setLogoutModalOpen(!logoutModalOpen));
          }}
          style={{ borderRadius: "10px", background: ipod ? "#F3F6F8" : "" }}
          className="h-[48px]"
        >
          <div className="w-full flex items-center gap-[10px] justify-start">
            <LogoutIcon />
            <span className="text-grayFourth font-medium group-hover:text-white">
              {t("exit")}
            </span>
          </div>
        </MenuItem>
      </div>
    </>
  );
}
