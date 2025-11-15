import type { FC } from "react";
import SectionTitle from "@atoms/SectionTitle";
import type { ISectionProps } from "@molecules/Section/types";
import { StyledSectionContainer } from "@molecules/Section/Section.style";

const Section: FC<ISectionProps> = ({ children, title, className }) => (
  <StyledSectionContainer
    direction="column"
    $justify="flex-start"
    $alignItems="flex-start"
    className={className}
  >
    {!!title && <SectionTitle label={title} />}
    {children}
  </StyledSectionContainer>
);
export default Section;
