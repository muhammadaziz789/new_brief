import HFInput from "components/UI/FormElements/HFInput";
import HFInputMask from "components/UI/FormElements/HFInputMask";
export default function OrderCreateInputs({
  register,
  control,
  errors,
  orderData = {},
  setValue = () => {},
  handleChangePhone = () => {}
}) {
  return (
    <div className="grid mobile:grid-cols-2 gap-x-[32px] gap-y-5 mt-5">
      <div>
        <HFInput
          name="first_name"
          register={register}
          required={true}
          label="name"
          placeholder="Muhammadaziz"
          classesInput="h-[52px]"
          defaultValue={orderData.user.first_name}
          errors={errors}
        />
      </div>
      <div>
        <HFInput
          name="last_name"
          register={register}
          required={true}
          label="surname"
          placeholder="Nigmatjonov"
          classesInput="h-[52px]"
          defaultValue={orderData.user.last_name}
          errors={errors}
        />
      </div>
      <div>
        <HFInputMask
          classesInput="h-[53px] bg-[#9092A3] bg-opacity-[0.12]"
          name="phone"
          control={control}
          errors={errors}
          label="telephon"
          required={orderData.user.registered_type !== "email"}
          mask={"+\\9\\9\\8 99 999 99 99"}
          maskchar={null}
          alwaysShowMask={false}
          placeholder="+998 __ ___ __ __"
          defaultValue={orderData.user.phone}
          setValue={setValue}
          handleChange={handleChangePhone}
        />
      </div>
      <div>
        <HFInput
          name="email"
          register={register}
          required={orderData.user.registered_type === "email"}
          label="email_address"
          placeholder="email_address"
          classesInput="h-[52px]"
          defaultValue={orderData.user.email}
          errors={errors}
        />
      </div>
    </div>
  );
}
