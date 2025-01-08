import { TitleText } from "../../../../components/Typograph";
import { UseCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffessContainer } from "./styles";

export function SelectedCoffess() {
  const { cartItems } = UseCart();
  return (
    <SelectedCoffessContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffessContainer>
  );
}
