import { useForm } from "react-hook-form";
import BrandAdds from "./Adds";
import BrandAddsMaterisl from "./AddsMaterisl";
import BrandClothes from "./Clothes";
import BrandDocuments from "./Documents";
import BrandingMain from "./Main";
import BrandSouviners from "./Souviners";
import BrandTables from "./Tables";
import CButton from "components/UI/CButton";
import BrandInteriers from "../Interiers";

const BrandingWrapper = ({ setText }) => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const submitForm = () => {
    const data = getValues();
    console.log(data);
  };

  return (
    <>
      <BrandingMain />
      <BrandDocuments name="documents" setValue={setValue} />
      <BrandAdds name="adds" setValue={setValue} />
      <BrandSouviners name="souviners" setValue={setValue} />
      <BrandInteriers name="interiers" setValue={setValue} />
      <BrandClothes name="clothes" setValue={setValue} />
      <BrandAddsMaterisl name="materials" setValue={setValue} />
      <BrandTables name="tables" setValue={setValue} />
      <div className="container flex justify-end" style={{ marginTop: "10px" }}>
        <CButton text="Formani jo'natish" handleClick={() => submitForm()} />
      </div>
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
