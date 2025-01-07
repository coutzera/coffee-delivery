import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";
import { RegularText } from "../../../../components/Typograph";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode; // Icon component (e.g., FontAwesomeIcon) or SVG element
}
export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title} </RegularText>
        <RegularText size="s">{subtitle} </RegularText>
      </div>
    </SectionTitleContainer>
  );
}
