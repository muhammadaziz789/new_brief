import CTable from "components/UI/CTable";
import { useRouter } from "next/router";
import { useMemo } from "react";
import CButton from "components/UI/CButton";
import { useQuery } from "react-query";
import orderService from "services/order/orderService";
import { UserProfilePageCard } from "../PagesCard";
import useTranslation from "next-translate/useTranslation";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";

export default function UserProfileWaitingPage({ mobile = false }) {
  const { t, lang } = useTranslation("profile");
  const router = useRouter();

  const { data: nextSeminars, isLoading } = useQuery(
    [`GET_NEXT_SEMINAR`, lang],
    () => {
      return orderService.getBoughtSeminars({
        type: "upcoming",
      });
    },
    {
      enabled: !!lang,
    }
  );

  const headColumns = useMemo(() => {
    const result = [
      {
        title: "name",
        key: "seminar",
        width: 400,
        render: (seminar) => (
          <p className="text-dark font-[600]">{seminar?.title}</p>
        ),
      },
      {
        title: "will_be_seminars_time",
        key: "seminar",
        width: 200,
        render: (seminar) => (
          <p className="text-dark font-[600]">
            {UseTimeZoneConverter(seminar?.started_at_utc)}
          </p>
        ),
      },
      {
        title: `action`,
        key: "seminar",
        width: 100,
        render: (seminar) => (
          <div>
            <CButton
              translation="profile"
              text="about_more"
              classes="px-[22px]"
              handleClick={(e) => {
                e.preventDefault();
                router.push(`/about-seminars/${seminar?.slug}`);
              }}
            />
          </div>
        ),
      },
    ];
    return result;
  }, [router]);

  const list = useMemo(() => {
    return nextSeminars?.orders ?? [];
  }, [nextSeminars]);

  return (
    <>
      <h1 className="text-dark font-bold mb-2">{t("waiting")}</h1>
      {mobile ? (
        <UserProfilePageCard
          status="waiting"
          list={list}
          isLoading={isLoading}
        />
      ) : (
        <CTable
          translation="profile"
          headColumns={headColumns}
          bodyColumns={list}
          nullData={!list?.length}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export async function getServerSideProps(ctx) {}
