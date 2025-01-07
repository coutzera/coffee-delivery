import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "small" | "medium"; // Define the size of the input field (optional)  // Default value is medium  // The size prop accepts either small, medium, or large  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus
}

export function QuantityInput({ size = "medium" }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
