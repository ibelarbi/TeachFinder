import type { FC } from "react";
import {
  StyledSectionTitleContainer,
  StyledSectionTitleUnderLine,
} from "@atoms/SectionTitle/SectionTitle.style";
import type { ISectionTitleProps } from "@atoms/SectionTitle/types";

const SectionTitle: FC<ISectionTitleProps> = ({ label, className }) => (
  <StyledSectionTitleContainer
    direction="column"
    $alignItems="flex-start"
    className={className}
  >
    <div style={{ lineHeight: "22px" }}>{label}</div>{" "}
    <StyledSectionTitleUnderLine />
  </StyledSectionTitleContainer>
);

export default SectionTitle;
