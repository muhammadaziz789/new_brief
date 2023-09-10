import Table from "components/UI/Table";
import { bodyColumnsTrack, headColumnsTrack } from "./track";
import { headColumnsVehicle, bodyColumnsVehicle } from "./vehicle";
import { headColumns, bodyColumns } from "./bussines";
import { useCallback } from "react";
const tables = { truck: [], vehicle: [], business: [] };
const BrandTables = ({ name, setValue }) => {
  const setTableValues = useCallback((initName, val, column, index) => {
    console.log(tables);
    tables[initName][index] = { ...tables[initName][index], [column]: val };

    setValue(name, tables);
  });

  return (
    <>
      <div className="mt-8">
        <Table
          headColumns={headColumnsTrack}
          bodyColums={bodyColumnsTrack}
          name="truck"
          setTableValues={setTableValues}
        />
      </div>
      <div className="mt-10">
        <Table
          headColumns={headColumnsVehicle}
          bodyColums={bodyColumnsVehicle}
          name="vehicle"
          setTableValues={setTableValues}
        />
      </div>
      <div className="mt-10">
        <Table
          headColumns={headColumns}
          bodyColums={bodyColumns}
          name="business"
          setTableValues={setTableValues}
        />
      </div>
    </>
  );
};

export default BrandTables;
