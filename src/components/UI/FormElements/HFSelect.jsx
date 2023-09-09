import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const HFSelect = ({
  control,
  name,
  label,
  width = "100%",
  options = [],
  disabledHelperText,
  placeholder,
  required = false,
  onChange = () => {},
  optionType,
  defaultValue = "",
  rules = {},
  children,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? "This is required field" : false,
        ...rules,
      }}
      render={({
        field: { onChange: onFormChange, value },
        fieldState: { error },
      }) => (
        <FormControl style={{ width }}>
            {label ? <InputLabel size="small">{label}</InputLabel> : ""}
            <Select 
                value={value || ""}
                label={label}
                size="small"
                error={error}
                inputProps={{ placeholder }}
                fullWidth
                just
                following
                attributes
                into
                select
                displayEmpty
                renderValue={
                value !== ""
                    ? undefined
                    : () => <span style={{ color: "#909EAB" }}>{placeholder}</span>
                }
                onChange={(e) => {
                onChange(e.target.value);
                onFormChange(e.target.value);
                }}
                {...props}
            >
                {options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
      )}
    ></Controller>
  );
};

export default HFSelect;