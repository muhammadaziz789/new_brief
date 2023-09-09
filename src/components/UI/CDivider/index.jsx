import { Divider, Chip } from "@mui/material";
export default function CDivider({
  color = "#E6EBF8",
  spacing = "20px 0",
  label = "",
}) {
  return (
    <Divider style={{ margin: spacing, borderColor: color }}>
      {label ? <Chip label="CHIP" /> : ""}
    </Divider>
  );
}
