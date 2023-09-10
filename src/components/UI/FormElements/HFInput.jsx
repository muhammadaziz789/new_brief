import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";

export default function HFInput({
  name,
  label,
  register,
  type = "text",
  translation = "common",
  placeholder,
  classes,
  classesInput,
  errors = {},
  disabled = false,
  required = false,
  errorMessage,
  defaultValue = "",
  ...props
}) {
  const { t } = useTranslation(translation);
  const registerProps = useMemo(
    () => (register ? { ...register(name, { required }) } : {}),
    [name]
  );
  return (
    <div className={`${classes} w-full`}>
      {label && (
        <p className="text-blackLight text-[14px] font-[700] mb-[6px]">
          {required ? <span className="text-error pr-1">*</span> : ""}
          {t(label)}
        </p>
      )}
      <input
        type={type}
        placeholder={t(placeholder)}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`w-full bg-grayThird outline-none text-dark text-[14px] font-[500] placeholder:text-gray ${
          errors[name] ? "border border-error" : ""
        } ${classesInput}`}
        {...props}
        {...registerProps}
      />
      {errors[name]?.message && (
        <p className="text-sm text-error">{t(errors[name].message || "")}</p>
      )}
      {/* {type==="password" && <div className={styles.icon}>show password</div>} */}
    </div>
  );
}
