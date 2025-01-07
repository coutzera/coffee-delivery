import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typograph";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="/coffees/expresso.png" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16} /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
