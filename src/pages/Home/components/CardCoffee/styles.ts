import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typograph";

export const CardCoffeeContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.5rem;
  }
`;

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;

    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  $weight: 700,
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  color: "label",
})`
  margin-bottom: 2rem;
`;

export const FooterCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCardWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none !important;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};

    border-radius: 6px;
    margin-left: 0.3rem;

    transition: 0.4s;

    &:hover {
      background-color: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;
