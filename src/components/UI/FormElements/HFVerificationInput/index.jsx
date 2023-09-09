import VerificationInput from "react-verification-input";
import cls from "./style.module.scss";
import { Controller } from "react-hook-form";
export default function HFVerificationInput({
  name,
  control,
  error = false,
  inputMode = "text",
  setError = () => {},
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <VerificationInput
          value={value}
          length={4}
          autoFocus
          placeholder=""
          type="tel"
          validChars="/^\d+$/"
          inputProps={{
            inputMode: inputMode,
          }}
          onChange={(e) => {
            onChange(e);
            setError(false);
          }}
          onFocus={() => setError(false)}
          classNames={{
            container: cls.container,
            character: error ? cls.nofocus : cls.character,
            characterInactive: cls.character__inactive,
            characterSelected: !error && cls.character__selected,
          }}
        />
      )}
    />
  );
}
