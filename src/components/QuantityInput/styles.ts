import styled, { css } from "styled-components";

interface QuantityInputProps {
  size?: "small" | "medium"; // Define the size of the input field (optional)  // Default value is medium  // The size prop accepts either small, medium, or large  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus icons  // The size prop affects the size of the input field  // The size prop affects the size of the minus and plus
}

export const QuantityInputContainer = styled.div<QuantityInputProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;

    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;

  border: none;
  background: none;

  color: ${({ theme }) => theme.colors["brand-purple"]};

  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
