import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompletedOrderContainer } from "./styles";

export function CompletedOrder() {
  return (
    <CompletedOrderContainer className="container">
      <CompleteOrderForm />
    </CompletedOrderContainer>
  );
}
