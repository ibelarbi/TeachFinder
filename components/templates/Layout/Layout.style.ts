import styled from "styled-components";
import { down } from "styled-breakpoints";
import { getSpacing, MAX_WIDTH } from "@utils/stylesheet";
import FlexWrapper from "@atoms/FlexWrapper";

export const StyledLayoutContainer = styled(FlexWrapper)`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 0 ${getSpacing(10)};
  box-sizing: border-box;
  ${down("sm")} {
    padding: 0 ${getSpacing(8)};
  }
`;

export const StyledLayoutWrapper = styled.div`
  width: 100%;
  max-width: ${`${MAX_WIDTH}px`};
  overflow: hidden;
  flex: 1;
  margin-top: ${getSpacing(40)};
  ${down("sm")} {
    margin-inline: auto;
    margin-top: ${getSpacing(30)};
  }
`;
