import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffessContainer } from "./styles";

export function SelectedCoffess() {
  return (
    <SelectedCoffessContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffessContainer>
  );
}
