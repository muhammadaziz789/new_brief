import { useMemo } from "react";
import { useForm } from "react-hook-form";
import HFInput from "components/UI/FormElements/HFInput";
import useTranslation from "next-translate/useTranslation";
export default function UserProfilePrivatePage({ user }) {
  const { t } = useTranslation("profile");
  const initialValue = useMemo(() => {
    return {
      first_name: user?.first_name,
      last_name: user?.last_name,
      username: user?.username,
    };
  }, [user]);
  const { control, register } = useForm({
    defaultValues: initialValue,
  });

  return (
    <div>
      <h1 className="text-dark font-bold mb-5">{t("private")}</h1>
      <div className="grid grid-cols-1 mobile:grid-cols-2 ipod:grid-cols-3 gap-6">
        <HFInput
          label="first_name"
          disabled={true}
          name="first_name"
          register={register}
          translation="profile"
        />
        <HFInput
          label="last_name"
          disabled={true}
          name="last_name"
          register={register}
          translation="profile"
        />
        <HFInput
          label={user?.registered_type === "email" ? "email_address" : "phone"}
          name="username"
          disabled={true}
          register={register}
          translation="profile"
        />
      </div>
    </div>
  );
}
