import {
  AddCardWrapper,
  CardCoffeeContainer,
  Description,
  FooterCard,
  Name,
  Tags,
} from "./styles";
import { RegularText, TitleText } from "../../../../components/Typograph";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { PriceFormat } from "../../../../utils/PriceFormat";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CardCoffee({ coffee }: CoffeeProps) {
  const formattedPrice = PriceFormat(coffee.price);
  return (
    <CardCoffeeContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <FooterCard>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
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
