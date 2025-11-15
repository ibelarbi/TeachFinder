"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { FC } from "react";
import { useIntl } from "react-intl";
import {
  StyledCategoriesWrapper,
  StylesCategoriesSection,
} from "@templates/teachers/Teachers.style";
import type { ITeachersProps } from "@templates/teachers/types";
import TeachersListing from "@organisms/TeacherListing/TeacherListing";

const Teachers: FC<ITeachersProps> = ({ teachers }) => {
  const intl = useIntl();
  const categoryCount = teachers.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sizing = {
    xs: 6,
    sm: 4,
    md: 3,
    lg: 2.4,
  };
  return (
    <StylesCategoriesSection
      title={intl.formatMessage({ id: "teachers.title" })}
      teacherCount={categoryCount}
    >
      <StyledCategoriesWrapper $justify="flex-start">
        <TeachersListing
          teachers={teachers}
          sizing={sizing}
          columnSpacing={isMobile ? 2 : 1.625}
          rowSpacing={isMobile ? 2 : 1.625}
        />
      </StyledCategoriesWrapper>
    </StylesCategoriesSection>
  );
};

export default Teachers;
