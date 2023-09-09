import { FC } from "react";
import BrandingMain from "./Main";
import BrandDocuments from "./Documents";
import BrandAdds from "./Adds";
import BrandSouviners from "./Souviners";
import BrandTables from "./Tables";
import BrandInteriers from "./Interiers";
import BrandClothes from "./Clothes";
import BrandAddsMaterisl from "./AddsMaterisl";

interface Props {
  setText?: Function
}


const BrandingWrapper: FC<Props> = ({ setText }) => {
  return (
    <>
      <BrandingMain />
      <BrandDocuments setText={setText} />
      <BrandAdds />
      <BrandSouviners />
      <BrandInteriers />
      <BrandClothes />
      <BrandAddsMaterisl />

      <BrandTables />

      <div className="container mt-10">
        <h3 className="text-lg leading-[20px] sm:text-2xl md:text-[32px] font-[600] text-center">
          Siz bilan hamkorlik qilishdan mamnunmiz!
        </h3>

        <div className="flex items-center justify-between mt-5 sm:mt-10 mb-10 sm:mb-20">
          <img
            className="w-[100px] sm:w-auto"
            src="/svg/logo-dark.svg"
            alt="logo"
          />
          <div>
            <div className="flex items-end gap-1">
              <span className="text-main font-medium">Sana:</span>
              <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div>
            </div>
            {/* <div className="flex items-end gap-1 mt-2">
              <span className="text-main font-medium">Imzo:</span>
              <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingWrapper;
