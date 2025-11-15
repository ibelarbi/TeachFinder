import styled from "styled-components";
import { down } from "styled-breakpoints";
import FlexWrapper from "@atoms/FlexWrapper";
import { colorPalette, fontSize, getSpacing } from "@utils/stylesheet";
import Section from "@molecules/Section";
import {
  StyledSectionTitleContainer,
  StyledSectionTitleUnderLine,
} from "@atoms/SectionTitle/SectionTitle.style";
import type { IStyledTeacherProps } from "@templates/teachers/types";

export const StylesCategoriesSection = styled(Section)<IStyledTeacherProps>`
  margin-top: ${getSpacing(17)};
  padding-bottom: ${getSpacing(60)};
  ${down("sm")} {
    margin-top: ${getSpacing(1)};
    padding-bottom: ${getSpacing(50)};
  }
  ${StyledSectionTitleContainer} {
    padding-bottom: ${getSpacing(8)};
    flex-direction: unset;
    text-transform: uppercase;
    font-size: ${fontSize.medium};
    ${(props) =>
      props.teacherCount !== 0 &&
      ` &::after {
      content: '(${props.teacherCount})';
      color: ${colorPalette.poloBlue};
      padding-inline-start: ${getSpacing(2)};
      line-height: 22px;
    }`}
  }
  ${StyledSectionTitleUnderLine} {
    display: none;
  }
`;
export const StyledCategoriesWrapper = styled(FlexWrapper)`
  width: 100%;
`;
