import type { AxiosResponse } from "axios";
import lodash from "lodash";

import {
  ALL_TEACHERS_URL,
  TEACHER_BY_ID_URL,
  TEACHERS_BY_UUIDS_URL,
} from "@utils/constants";

import type { ITeacherDTO, ITeacher } from "./types";
import { toTeacherMapper, toTeachersMapper } from "./mappers";
import teachFinderAPI from "@config/api/teachfinder-api";

export const getTeachers = async (): Promise<ITeacher[]> => {
  const { data }: AxiosResponse<ITeacherDTO[]> =
    await teachFinderAPI.get(ALL_TEACHERS_URL);

  return toTeachersMapper(data);
};

export const getFilteredTeachers = async (
  filters: Record<string, unknown>
): Promise<ITeacher[]> => {
  const { data }: AxiosResponse<ITeacherDTO[]> =
    await teachFinderAPI.get(ALL_TEACHERS_URL, { params: filters });

  return toTeachersMapper(data);
};

export const getTeacher = async (id: number): Promise<ITeacher> => {
  const { data }: AxiosResponse<ITeacherDTO> =
    await teachFinderAPI.get(TEACHER_BY_ID_URL + id);

  return toTeacherMapper(data);
};

export const getTeachersByUuids = async (uuids: string[]): Promise<ITeacher[]> => {
  const { data }: AxiosResponse<ITeacherDTO[]> =
    await teachFinderAPI.post(TEACHERS_BY_UUIDS_URL, { uuids });

  return toTeachersMapper(data);
};

export const getTopTeachers = async (): Promise<ITeacher[]> => {
  const { data }: AxiosResponse<ITeacherDTO[]> =
    await teachFinderAPI.get(ALL_TEACHERS_URL);

  const teachers = toTeachersMapper(data);

  return lodash.slice(teachers, 0, 6);
};
