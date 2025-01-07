import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import coffeeDeliveryLogoImg from "../../assets/logoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeDeliveryLogoImg} />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Rio de Janeiro, RJ
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
