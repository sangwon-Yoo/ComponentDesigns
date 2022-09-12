import styled, { css } from "styled-components";

export interface StyledHeaderContainer {
    bgColor?: string;
    direction: 'row' | 'column';
}

const StyledHeaderContainer = styled.div<StyledHeaderContainer>`
  
  ${props => props.direction === 'row' && css`
      height: 100%;
  `}
  ${props => props.direction === 'column' && css`
      width: 100%;
  `}
  
  display: flex;
  /* flex 방향 설정 */
  flex-direction: ${props => props.direction};
  justify-content: space-between; 
  
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledHeaderContainer;