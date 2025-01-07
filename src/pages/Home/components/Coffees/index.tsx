import { TitleText } from "../../../../components/Typograph";
import { CardCoffee } from "../CardCoffee";
import { CoffeeListCard, CoffeesContainer } from "./styles";

export function Coffees() {
  return (
    <CoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeListCard>
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
      </CoffeeListCard>
    </CoffeesContainer>
  );
}
