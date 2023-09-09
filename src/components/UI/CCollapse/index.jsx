import ListItemButton from "@mui/material/ListItemButton";
import { Add, Close } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
export default function CCollapse({ element = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const styleListItem = {
    background: "#fff",
    border: "1px solid #E6EBF8",
    borderRadius: "5px",
    marginTop: "20px",
    height: "70px",
    padding: "0 25px",
  };

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <ListItemButton
        style={styleListItem}
        onClick={(e) => {
          e.preventDefault();
          handleClick(element);
        }}
      >
        <p className={`w-full font-bold text-blackLighter text-lg`}>
          {element?.title}
        </p>
        {isOpen ? (
          <Close style={{ color: "#A4AFC1" }} />
        ) : (
          <Add style={{ color: "#A4AFC1" }} />
        )}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <div className="ml-[25px] mt-[24px]">
          {element?.children?.map((children, ind) => (
            <div
              key={ind}
              className="mt-[20px] mb-[26px] flex items-center justify-between"
            >
              <div className="flex items-center gap-3 text-grayDarker font-[600]">
                <div className="w-[33px] h-[33px] rounded-[5px] bg-ink text-white font-[600] text-[12px] flex items-center justify-center">
                  {ind + 1}
                </div>
                {children.title}
              </div>
              <div className="text-grayDarker font-[600]">
                {children?.duration}
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
