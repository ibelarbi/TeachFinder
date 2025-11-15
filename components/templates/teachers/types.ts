import type { ITeacher } from '@services/teachers/types';
import type { ReactNode } from 'react';


export interface ITeachersProps {
  teachers: ITeacher[];
}
export interface IStyledTeacherProps {
  teacherCount: number;
  children: ReactNode;
}