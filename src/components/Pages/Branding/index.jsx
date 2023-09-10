import BrandAdds from "./Adds";
import BrandAddsMaterisl from "./AddsMaterisl";
import BrandClothes from "./Clothes";
import BrandDocuments from "./Documents";
import BrandingMain from "./Main";
import BrandSouviners from "./Souviners";
import BrandTables from "./Tables";

const BrandingWrapper = ({ setText }) => {
  return (
    <>
      <BrandingMain />
      <BrandDocuments />
      <BrandAdds />
      <BrandSouviners />
      <BrandClothes />
      <BrandAddsMaterisl />
      <BrandTables />
      <div className="container">
        <h3 className="text-lg mt-10 leading-[20px] sm:text-2xl md:text-[32px] font-[600] text-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingWrapper;
