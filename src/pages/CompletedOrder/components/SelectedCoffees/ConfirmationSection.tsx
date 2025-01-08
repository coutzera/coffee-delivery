import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typograph";
import { UseCart } from "../../../../hooks/useCart";
import { PriceFormat } from "../../../../utils/PriceFormat";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;
export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = UseCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = PriceFormat(cartItemsTotal);
  const formattedCartTotal = PriceFormat(cartTotal);
  const formattedDeliveredPrice = PriceFormat(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveredPrice}</RegularText>
      </div>
      <div>
        <RegularText size="l" $weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" $weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
