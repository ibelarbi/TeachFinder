import type { FC } from "react";
import Grid from "@mui/material/Grid";
import type {
  ISizing,
  ITeachersListingProps,
} from "@organisms/TeacherListing/types";
import TeacherBox from "@molecules/TeacherBox/TeacherBox";

const TeachersListing: FC<ITeachersListingProps> = ({
  teachers,
  sizing,
  className,
  ...gridProps
}) => {
  const { rowSpacing, columnSpacing } = gridProps;
  return (
    <Grid
      container
      rowSpacing={rowSpacing || 1}
      columnSpacing={columnSpacing || 1.5}
      className={className}
      {...gridProps}
    >
      {teachers.map((teacher) => (
        <Grid key={teacher.id} item component="div" {...(sizing as ISizing)}>
          <TeacherBox teacher={teacher} />
        </Grid>
      ))}
    </Grid>
  );
};
export default TeachersListing;
