import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffess } from "./components/SelectedCoffees";
import { CompletedOrderContainer } from "./styles";

export function CompletedOrder() {
  return (
    <CompletedOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffess />
    </CompletedOrderContainer>
  );
}
