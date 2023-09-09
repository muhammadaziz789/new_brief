import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { DoubleArrowRight, DoubleArrowLeft } from "components/svg";
import { useState } from "react";
export default function CPagination({
  count = 1,
  currentPage = 0,
  setCurrentPage = () => {},
  onChange = () => {},
  onPageChange = () => {},
  onRowsPerPageChange = () => {},
}) {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const customization = {
    "& .MuiButtonBase-root": {
      width: "45px",
      height: "45px",
      background: "#fff",
      border: "1px solid #E9F3FE",
      color: "#A4AFC1",
      fontWeight: "500",
    },
    "& .Mui-disabled": {
      background: "#fff",
    },
    "& .Mui-selected": {
      background: "#5122D6 !important",
      color: "#fff",
      "&:hover": {
        background: "#5122D6 !important",
      },
    },
  };
  return (
    <Pagination
      sx={customization}
      count={count}
      variant="outlined"
      shape="rounded"
      page={currentPage}
      onChange={handleChange}
      // onPageChange={(e) => console.log("eee", e)}
      // rowsPerPage={(e) => console.log("eee", e)}
      // onRowsPerPageChange={(e) => console.log("eee", e)}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: DoubleArrowLeft, next: DoubleArrowRight }}
          {...item}
        />
      )}
    />
  );
}
