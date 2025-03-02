import styled, { css } from "styled-components"; // Adicione a importação de `css`

export const HeaderContainer = styled.header`
  max-width: 100%;
  height: 6.5rem;

  background-color: ${({ theme }) => theme.colors["base-background"]};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  $variant?: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  min-width: 2.3rem;
  height: 2.3rem;

  border-radius: 6px;
  border: none;

  padding: 0 0.5rem;

  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  position: relative;

  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ $variant = "purple", theme }) => `
    background-color: ${theme.colors[`brand-${$variant}-light`]};
    color: ${theme.colors[`brand-${$variant}-dark`]};

    span {
    background-color: ${theme.colors[`brand-${$variant}-dark`]};}
  `}

  ${({ $variant = "purple", theme }) =>
    $variant === "purple" &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`;
