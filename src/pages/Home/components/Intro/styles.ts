import styled from "styled-components";
import introBackgroundImg from "../../../../assets/introBackground.svg";
import { TitleText } from "../../../../components/Typograph";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        rgba(${parseInt(theme.colors["base-background"].slice(1, 3), 16)}, 
             ${parseInt(theme.colors["base-background"].slice(3, 5), 16)}, 
             ${parseInt(
               theme.colors["base-background"].slice(5, 7),
               16
             )}, 0.2) 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
