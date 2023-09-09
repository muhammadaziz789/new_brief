import useTranslation from "next-translate/useTranslation";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import seminarService from "services/seminars/seminarService";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";
import CTable from "components/UI/CTable";
import CLoadingBtn from "components/UI/CLoadingBtn";
import CSkeleton from "components/UI/CSkeleton";

export default function UserProfileCertificatePage({ ipod = false }) {
  const { t } = useTranslation("profile");
  const [loading, setLoading] = useState(null);
  const { data: sertificates, isLoading } = useQuery(
    ["GET_SERTIFICATES"],
    () => {
      return seminarService.getUserSeminarsList({});
    }
  );

  const list = useMemo(() => {
    return (
      sertificates?.seminars?.map((item) => ({
        ...item,
        sertificate: item,
      })) ?? []
    );
  }, [sertificates]);

  function handleGetSertificate(id) {
    setLoading(id);
    seminarService
      .postUserSertificate(id)
      .then((response) => {
        downloadImage(response?.image_base_64, response?.image_name);
      })
      .finally(() => setLoading(null));
  }

  const downloadImage = (base64String, filename = "filename") => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = "data:image/png;base64," + base64String;
  };

  const headColumns = useMemo(() => {
    const result = [
      {
        title: "name",
        key: "title",
        width: 400,
        render: (title) => <p className="text-dark font-[600]">{title}</p>,
      },
      {
        title: "time",
        key: "sertificate",
        width: 200,
        render: (sertificate) => (
          <p className="text-dark font-[600]">
            {UseTimeZoneConverter(sertificate?.started_at_utc)}
          </p>
        ),
      },
      {
        title: `action`,
        key: "sertificate",
        width: 200,
        textAlign: "center",
        render: (sertificate) => (
          <div className="flex justify-end">
            <CLoadingBtn
              loading={loading === sertificate?.id}
              disabled={!sertificate.is_active}
              translation="profile"
              text="download"
              styles={{
                background: "#171717",
                padding: "0 12px",
                fontSize: "14px",
                height: "40px",
              }}
              handleClick={() => handleGetSertificate(sertificate.id)}
            />
          </div>
        ),
      },
    ];
    return result;
  }, [loading]);

  return (
    <div>
      <h1 className="text-dark font-bold mb-3">{t("certificate")}</h1>

      {ipod ? (
        <>
          {!isLoading && list?.length ? (
            <div className="grid grid-cols-1 mobile:grid-cols-2 gap-5 mt-5">
              {list?.map((item, ind) => (
                <div
                  key={ind}
                  className={`border p-5 rounded-[10px] border-borderDarker grid grid-cols-1 gap-3 bg-white`}
                >
                  <div>
                    <h3 className="text-grayFourthDarker font-medium">
                      {t("name")}:
                    </h3>
                    <p className="text-dark font-[600]">{item?.title}</p>
                  </div>
                  <div className="text-grayFourthDarker font-medium">
                    <h3>{t("time")}</h3>
                    <p className="text-dark font-[600]">
                      {UseTimeZoneConverter(item?.started_at_utc)}
                    </p>
                  </div>
                  <div className="text-grayFourthDarker font-medium flex justify-between">
                    <h3></h3>
                    <CLoadingBtn
                      loading={loading === item?.id}
                      text="download"
                      styles={{
                        background: "#171717",
                        padding: "0 12px",
                        fontSize: "14px",
                        height: "40px",
                      }}
                      handleClick={(e) => handleGetSertificate(item.id)}
                      disabled={!item.is_active}
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
      ) : (
        <CTable
          translation="profile"
          headColumns={headColumns}
          bodyColumns={list ?? []}
          nullData={!list?.length}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
