import styled from "styled-components";

export const CoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeListCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;
