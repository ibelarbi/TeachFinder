import type { ITeacherDTO, ITeacher } from "./types";

const getColor = (colorAsString?: string): string => {
  if (colorAsString) {
    const color = Number(colorAsString);
    return `#${(color & 0x00ffffff).toString(16).padStart(6, "0")}`;
  }
  return "black";
};

export const toTeacherMapper = (dto: ITeacherDTO): ITeacher => {
  const teacher: ITeacher = {
      id: dto.id ?? -1,
      fullName: dto.full_name ?? "",
      bio: dto.bio ?? "",
      subjects: dto.subjects ?? [],
      pricePerHour: dto.price_per_hour ?? 0,
      rating: dto.rating ?? 0,
      imagePath: dto.image_path ?? '',
      color: getColor(dto.color),
      uuid: dto.uuid
  };

  return teacher;
};

export const toTeachersMapper = (teachersDTO: ITeacherDTO[]): ITeacher[] => {
  const teachers: ITeacher[] = [];
  const items: ITeacher[] = teachersDTO
    .map(dto => toTeacherMapper(dto))

  teachers.push(...items);
  return teachers;
};
