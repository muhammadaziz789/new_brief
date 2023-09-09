import CButton from "components/UI/CButton";
import CSkeleton from "components/UI/CSkeleton";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";
export function UserProfilePageCard({ status = "", list = [] }) {
  const { t } = useTranslation("profile");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!isLoading && list?.length ? (
        <div className="grid grid-cols-1 gap-5 mt-5">
          {list?.map((item, ind) => (
            <div
              key={ind}
              className={`border p-5 rounded-[10px] border-borderDarker grid grid-cols-1 gap-3 bg-white`}
            >
              <div>
                <h3 className="text-grayFourthDarker font-medium">
                  {t("name")}:
                </h3>
                <p className="text-dark font-[600]">{item?.seminar?.title}</p>
              </div>
              <div className="text-grayFourthDarker font-medium">
                <h3>
                  {t(
                    status === "waiting"
                      ? "will_be_seminars_times"
                      : "done_seminars_time"
                  )}
                </h3>
                <p className="text-dark font-[600]">
                  {UseTimeZoneConverter(item?.seminar?.started_at_utc)}
                </p>
              </div>
              <div className="text-grayFourthDarker font-medium flex justify-between">
                <h3></h3>
                <CButton
                  text="about_more"
                  translation="profile"
                  classes="px-[22px]"
                  handleClick={(e) => {
                    e.preventDefault();
                    router.push(`/about-seminars/${item?.seminar?.slug}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {isLoading && (
        <CSkeleton classes="grid-cols-1 gap-3" width="100%" height={200} />
      )}
      {!isLoading && !list.length && (
        <div className="flex flex-col items-center">
          <img
            width={100}
            src="/images/no-data.png"
            alt={t("data_not_available")}
          />
          <p>{t("data_not_available")}</p>
        </div>
      )}
    </>
  );
}
