import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "small" | "medium"; // Define the size of the input field (optional)  // Default value is medium  // The size prop accepts either small, medium, or large  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus
  quantity: number; // Current quantity of the coffee item  // The quantity prop represents the current quantity of the coffee item  // The quantity prop should be a positive integer  // The quantity prop should be a positive integer  // The quantity prop should be a positive integer  // The quantity prop should be a positive integer
  onIncrease: () => void; // Callback function to be invoked when the quantity is increased  // The callback function receives no parameters and should update the quantity state  // The callback function should update the quantity state by incrementing it by 1  // The callback function should update the quantity state by incrementing it by 1  // The callback function should update the quantity state by incrementing it by 1  // The callback function should update the quantity state by incrementing it by
  onDecrease: () => void; // Callback function to be invoked when the quantity is decreased  // The callback function receives no parameters and should update the quantity state  // The callback function should update the quantity state by decrementing it by 1  // The callback function should update the quantity state by decrementing it by 1  // The callback function should update the quantity state by decrementing it by 1  // The callback function should update the quantity state by decrementing it
}

export function QuantityInput({
  size = "medium",
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
