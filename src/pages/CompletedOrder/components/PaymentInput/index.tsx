import { PaymentInputContainer, ContentContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentInputContainer>
      <input
        type="radio"
        id={id}
        {...props}
        name="paymentMethod"
        ref={ref} // Atribui o ref ao input
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentInputContainer>
  );
});
