import styled, { css } from "styled-components";

export interface StyledFlexContainerProps {
    flexDirection?: string; //default : row
    justifyContent?: string; //default : flex2-start
    alignItem?: string; //default : stretch
    bgColor?: string; //디버깅용
}
const StyledFlexContainer = styled.div<StyledFlexContainerProps>`

  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItem};
  
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;