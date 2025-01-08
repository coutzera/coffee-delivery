import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentInput } from "../PaymentInput";
import { PaymentOptionsContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typograph";

// eslint-disable-next-line react-refresh/only-export-components
export const paymentMethod = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethod).map(([key, { label, icon }]) => (
        <PaymentInput
          key={key}
          id={key}
          label={label}
          icon={icon}
          value={key}
          {...register("paymentMethod")} // Registro correto
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentOptionsContainer>
  );
}
