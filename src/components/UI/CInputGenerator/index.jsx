import useDebounce from "hooks/useDebounce";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";

export default function CInputGenerator({
  classes,
  classesInput,
  icon,
  name = "",
  type = "text",
  label = "",
  defaultValue = "",
  translation = "common",
  placeholder = "placeholder",
  onChange = () => {},
  setValue = () => {},
  debounceTime = 500,
  errors = {},
  props,
}) {
  const [text, setText] = useState("");
  const { t } = useTranslation(translation);

  const handleDebounce = useDebounce((evt) => {
    setText(evt);
    onChange(evt);
  }, debounceTime);

  useEffect(() => {
    setValue(name, text);
  }, [text, name]);

  return (
    <div className="w-full relative">
      {label ? (
        <p className="text-dark mb-1 font-bold">
          {t(label, `${translation}:${label}`)}
        </p>
      ) : (
        ""
      )}
      <div
        className={`h-[50px] flex items-center overflow-hidden px-[20px] ${
          errors[name] ? "border border-error" : ""
        } ${classes}`}
      >
        {icon}
        <input
          type={type}
          onChange={(e) => handleDebounce(e.target.value)}
          placeholder={t(placeholder, `${translation}:${placeholder}`)}
          defaultValue={t(defaultValue, `${translation}:${defaultValue}`)}
          className={`w-full px-[16px] h-full outline-none placeholder:text-grayLight text-dark text-sm font-medium bg-transparent ${classesInput} `}
          {...props}
        />
      </div>
      {errors[name]?.message && (
        <p className="text-error text-sm">{t(errors[name].message)}</p>
      )}
    </div>
  );
}
