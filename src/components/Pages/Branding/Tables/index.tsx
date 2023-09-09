import Table from "@/components/UI/Table";
import { bodyColumnsTrack, headColumnsTrack } from "./track";
import { headColumnsVehicle, bodyColumnsVehicle } from './vehicle'
import { headColumns, bodyColumns } from './bussines'

const BrandTables = () => {

    return (
        <>
            <div className="mt-8">
                <Table headColumns={headColumnsTrack} bodyColums={bodyColumnsTrack} />
            </div>
            <div className="mt-10">
                <Table headColumns={headColumnsVehicle} bodyColums={bodyColumnsVehicle} />
            </div>
            <div className="mt-10">
                <Table headColumns={headColumns} bodyColums={bodyColumns} />
            </div>
        </>
    )
}

export default BrandTables