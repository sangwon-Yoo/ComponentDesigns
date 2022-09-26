import styled, { css } from "styled-components";

export interface StyledHeaderContainer {
    bgColor?: string;
    flexDirection: 'row' | 'column';
}

const StyledHeaderContainer = styled.div<StyledHeaderContainer>`
  
  ${props => props.flexDirection === 'row' && css`
      height: 100%;
  `}
  ${props => props.flexDirection === 'column' && css`
      width: 100%;
  `}
  
  display: flex;
  /* flex 방향 설정 */
  flex-direction: ${props => props.flexDirection};
  justify-content: space-between; 
  
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledHeaderContainer;