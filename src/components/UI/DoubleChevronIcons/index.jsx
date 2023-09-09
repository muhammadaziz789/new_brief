import { ChevronRight } from "@mui/icons-material";
export function DoubleChevronIcons() {
  return (
    <div className="flex items-center">
      <ChevronRight
        style={{ width: "14px", height: "14px", color: "#707282" }}
      />
      <ChevronRight
        style={{
          width: "14px",
          height: "14px",
          marginLeft: "-10px",
          color: "#707282",
        }}
      />
    </div>
  );
}
