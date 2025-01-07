import {
  AddCardWrapper,
  CardCoffeeContainer,
  Description,
  FooterCard,
  Name,
  Tags,
} from "./styles";
import coffeeAmericano from "../../../../assets/coffees/americano.png";
import { RegularText, TitleText } from "../../../../components/Typograph";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src={coffeeAmericano} />
      <Tags>
        <span>Tradicional</span>
      </Tags>
      <Name>Expresso Americano</Name>
      <Description>
        Expresso diluído, menos intenso que o tradicional
      </Description>

      <FooterCard>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
        <AddCardWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCardWrapper>
      </FooterCard>
    </CardCoffeeContainer>
  );
}
