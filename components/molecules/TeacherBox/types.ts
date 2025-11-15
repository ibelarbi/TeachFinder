import type { ReactNode } from 'react';
import type { ITeacher } from '@services/teachers/types';

export interface ITeacherBoxProps {
  teacher: ITeacher;
  className?: string;
}

export interface IStyledteacherBoxContainerProps {
  $background?: string;
  $color?: string;
  children?: ReactNode;
}
