import { memo } from "react";
import HFInput from "../FormElements/HFInput";
import cls from "./style.module.scss";
import useDebounce from "hooks/useDebounce";

const Table = ({ name, headColumns = [], bodyColums = [], setTableValues }) => {
  const handleChane = useDebounce((name, value, colIndex, rowIndex) => {
    setTableValues(name, value, colIndex === 0 ? "model" : "color", rowIndex);
  }, 300);

  return (
    <div className={`container ${cls.table}`}>
      <div className={cls.header}>
        {headColumns?.map((element, index) => (
          <div
            key={index}
            className={cls.cell}
            style={{ width: element?.width ? element.width : "" }}
          >
            <p>{element.title}</p>
          </div>
        ))}
      </div>

      <div className={cls.body}>
        {bodyColums.map((row, rowIndex) => (
          <div key={rowIndex} className={cls.row}>
            {headColumns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={cls.cell}
                style={{
                  width: col.width ? col.width : "",
                  textAlign: col?.textAlign ?? "left",
                }}
              >
                {/* <HFInput /> */}
                <input
                  onChange={(e) =>
                    handleChane(name, e.target.value, colIndex, rowIndex)
                  }
                  type="text"
                  className="w-full outline-none"
                />
                {/* <p>{row?.[col.key] || ""}</p> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Table);
