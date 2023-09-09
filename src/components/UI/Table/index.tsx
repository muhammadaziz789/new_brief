import { FC } from "react";
import cls from "./style.module.scss";

interface Props {
  headColumns: object[],
  bodyColums: object[]
}

const Table: FC<Props> = ({ headColumns = [], bodyColums = [] }) => {


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
                <input type="text" className="w-full outline-none" />
                {/* <p>{row?.[col.key] || ""}</p> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
