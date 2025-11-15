import styled from 'styled-components';
import type { IFlexWrapperProps } from './types';

export const FlexWrapper = styled.div<IFlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$alignItems || 'center'};
  gap: ${props => props.gap || '0px'};
`;

export default FlexWrapper;
