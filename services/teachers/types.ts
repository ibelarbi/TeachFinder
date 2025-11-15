export interface ITeacherDTO {
  id: number;
  uuid: string;
  full_name: string;
  bio?: string;
  subjects?: string[];
  price_per_hour?: number;
  rating?: number;
  image_path?: string;
  color?: string;
}

export interface ITeacher {
  id: number;
  uuid: string;
  fullName: string;
  bio?: string;
  subjects?: string[];
  pricePerHour?: number;
  rating?: number;
  imagePath?: string;
  color?: string;
}
