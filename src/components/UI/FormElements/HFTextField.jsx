import { TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import { Controller } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
  input: {
    "&::placeholder": {
      color: "#fff",
    },
  },
}))

const HFTextField = ({
  control,
  name = "",
  isFormEdit = false,
  isBlackBg,
  disabledHelperText = false,
  required = false,
  fullWidth = false,
  withTrim = false,
  rules = {},
  defaultValue = "",
  disabled,
  placeholder,
  typingType = "",
  ...props
}) => {
  const classes = useStyles()
  const [currencyTyping, setCurrencyTyping] = useState()

  let formatPrice = (value) => {
    if (value && typeof value === 'number') {
      let currency = value.toString().replace(/,/g, "");
      currency = parseFloat(currency);
      currency = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(currency);
      setCurrencyTyping(currency);
      return currency;
    }
    return 0;
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? "This is required field" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <div style={{ display: "none" }}>
            {typingType === "currency" && props?.InputProps?.readOnly
              ? formatPrice(value)
              : ""}
          </div>
          <TextField
            size="small"
            value={currencyTyping || value}
            onChange={(e) => {
              onChange(withTrim ? e.target.value?.trim() : e.target.value);
              formatPrice(e.target.value);
            }}
            name={name}
            error={error}
            fullWidth={fullWidth}
            placeholder={placeholder}
            InputProps={{
              readOnly: disabled,
              classes: {
                input: isBlackBg ? classes.input : "",
              },
              style: disabled
                ? {
                    background: "#c0c0c039",
                  }
                : {
                    background: isBlackBg ? "#2A2D34" : "inherit",
                    color: isBlackBg ? "#fff" : "inherit",
                  },
            }}
            helperText={!disabledHelperText && error?.message}
            className={isFormEdit ? "custom_textfield" : ""}
            {...props}
          />
        </>
      )}
    ></Controller>
  );
}

export default HFTextField
