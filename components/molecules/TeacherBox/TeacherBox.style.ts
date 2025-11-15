import styled from "styled-components";
import FlexWrapper from "@atoms/FlexWrapper";
import {
  colorPalette,
  fontFamily,
  fontSize,
  getSpacing,
} from "@utils/stylesheet";
import type { IStyledteacherBoxContainerProps } from "@molecules/TeacherBox/types";

export const StyledCategoryBoxWrapper = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
  border-radius: ${getSpacing(2)};
  background: ${colorPalette.white};
`;
export const StyledCategoryBoxContainer = styled(
  FlexWrapper
)<IStyledteacherBoxContainerProps>`
  padding-top: 100%;
  background: url(${(props) => props.$background}) ${(props) => props.$color};
  background-size: contain;
  border: 1px solid ${colorPalette.linkWater} !important;
`;

export const StyledCategoryBoxTitle = styled.div`
  line-height: 19px;
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.medium};
  color: ${colorPalette.cello};
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding-top: ${getSpacing(6)};
`;

export const StyledCategoryBoxName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
