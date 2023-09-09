import { authActions } from "store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { setStep } from "store/registrationModal/registrationModal.slice";
import HFInput from "components/UI/FormElements/HFInput";
import HFInputMask from "components/UI/FormElements/HFInputMask";
import CButton from "components/UI/CButton";
import CModal from "components/UI/CModal";
import cls from "./style.module.scss";
import { ReplayIcon } from "components/svg";
export default function BuyModal({ handleModalClose = () => {} }) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const ExtraHeader = () => (
    <div className={cls.header}>
      <h2 className={cls.title}>To‘lov qilish</h2>
      <p className={cls.text}>
        Kartangizni kiriting. Kartangizdan faqatgina chipta narxi:{" "}
        <span className={cls.number}>240,000 UZS </span> yechib olinadi!
      </p>
    </div>
  );

  const Extra = () => (
    <div className="absolute top-[40px] right-4 cursor-pointer">
      <ReplayIcon />
    </div>
  );

  return (
    <div>
      <div>
        <CModal
          width="356px"
          footer={false}
          extraHeader={<ExtraHeader />}
          onClose={handleModalClose}
        >
          <div className="mt-[18px]">
            <HFInputMask
              control={control}
              name="card_number"
              placeholder="Kiriting"
              label="Karta raqami"
              mask="9999 9999 9999 9999"
              maskchar={null}
              alwaysShowMask={false}
              classesInput="bg-graySecondry bg-opacity-[0.12] mb-3"
            />
            <HFInputMask
              control={control}
              name="card_expired_at"
              placeholder="MM/YY"
              label="Muddat"
              mask="99/99"
              alwaysShowMask={false}
              classesInput="bg-graySecondry bg-opacity-[0.12] mb-3"
            />
            <HFInputMask
              control={control}
              name="verification_code"
              placeholder="00:42"
              label="Tasdiqlash kodi"
              mask="9999"
              alwaysShowMask={false}
              clasess="relative"
              classesInput="bg-graySecondry bg-opacity-[0.12]"
              extra={<Extra />}
            />
            {/* <HFInput
                key={ind}
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                classes="mt-[16px]"
                register={register}
                {...register(item.name, {
                  required: true,
                })}
              /> */}
            <CButton
              text="Davom ettirish"
              classes="w-full h-[52px] mt-[24px]"
              type="submit"
            />
          </div>
        </CModal>
      </div>
    </div>
  );
}
