import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { TitleText } from "../../../../components/Typograph";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AdressForm } from "./AddressForm";
import { PaymentOptions } from "./PaymentOptions";

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />
        <AdressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />
        <PaymentOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
