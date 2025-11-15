import type { FC } from "react";

import {
  StyledCategoryBoxContainer,
  StyledCategoryBoxTitle,
  StyledCategoryBoxWrapper,
  StyledCategoryBoxName,
} from "@molecules/TeacherBox/TeacherBox.style";
import type { ITeacherBoxProps } from "./types";

const TeacherBox: FC<ITeacherBoxProps> = ({ teacher, className }) => {
  return (
    <StyledCategoryBoxWrapper>
      <StyledCategoryBoxContainer
        onClick={() => {}}
        $alignItems="flex-end"
        $justify="flex-start"
        $background={teacher.imagePath}
        $color={teacher.color}
        className={className}
      />
      <StyledCategoryBoxTitle title={teacher.fullName}>
        <StyledCategoryBoxName>{teacher.fullName}</StyledCategoryBoxName>
      </StyledCategoryBoxTitle>
    </StyledCategoryBoxWrapper>
  );
};

export default TeacherBox;
