import { coffees } from "../../../../coffees";
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
        {coffees.map((coffee) => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListCard>
    </CoffeesContainer>
  );
}
