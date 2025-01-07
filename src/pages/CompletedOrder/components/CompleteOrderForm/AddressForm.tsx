import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";

export function AdressForm() {
  return (
    <AdressFormContainer>
      <Input type="number" placeholder="CEP" className="cep" />
      <Input type="text" placeholder="Rua" className="street" />
      <Input type="number" placeholder="Número" />
      <Input type="text" placeholder="Complemento" className="complement" />
      <Input type="text" placeholder="Bairro" />
      <Input type="text" placeholder="Cidade" />
      <Input type="text" placeholder="UF" />
    </AdressFormContainer>
  );
}
