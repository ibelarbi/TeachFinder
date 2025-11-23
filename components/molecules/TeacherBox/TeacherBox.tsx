import type { FC } from "react";

import {
  StyledTeacherBoxContainer,
  StyledTeacherBoxTitle,
  StyledTeacherBoxWrapper,
  StyledTeacherBoxName,
} from "@molecules/TeacherBox/TeacherBox.style";
import type { ITeacherBoxProps } from "./types";

const TeacherBox: FC<ITeacherBoxProps> = ({ teacher, className }) => {
  const teacherName = teacher.fullName;
  return (
    <StyledTeacherBoxWrapper>
      <StyledTeacherBoxContainer
        onClick={() => {}}
        $alignItems="flex-end"
        $justify="flex-start"
        $background={teacher.imagePath}
        $color={teacher.color}
        className={className}
      />
      <StyledTeacherBoxTitle title={teacher.fullName}>
        <StyledTeacherBoxName>{teacherName}</StyledTeacherBoxName>
      </StyledTeacherBoxTitle>
    </StyledTeacherBoxWrapper>
  );
};

export default TeacherBox;
