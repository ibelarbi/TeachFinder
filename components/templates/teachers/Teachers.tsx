"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState, type FC } from "react";
import { useIntl } from "react-intl";
import {
  StyledTeachersWrapper,
  StylesTeachersSection,
} from "@templates/Teachers/Teachers.style";
import TeachersListing from "@organisms/TeacherListing/TeacherListing";
import { getTeachers } from "@services/teachers/services";
import type { ITeacher } from "@services/teachers/types";

const Teachers: FC = ({}) => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  const intl = useIntl();
  const teacherCount = teachers.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sizing = {
    xs: 6,
    sm: 4,
    md: 3,
    lg: 2.4,
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await getTeachers();
      setTeachers(data);
    };
    fetchTeachers().catch(Error);
  }, []);

  return (
    <StylesTeachersSection
      title={intl.formatMessage({ id: "teachers.title" })}
      teacherCount={teacherCount}
    >
      <StyledTeachersWrapper $justify="flex-start">
        <TeachersListing
          teachers={teachers}
          sizing={sizing}
          columnSpacing={isMobile ? 2 : 1.625}
          rowSpacing={isMobile ? 2 : 1.625}
        />
      </StyledTeachersWrapper>
    </StylesTeachersSection>
  );
};

export default Teachers;
