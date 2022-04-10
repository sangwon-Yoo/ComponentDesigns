import styled, { css } from "styled-components";

export interface StyledFlexContainerProps {
    bgColor? : string;
    scroll? : boolean;
    directionRow?: boolean;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  /* ++확장성을 위해 100vh 대신 %를 씀 */
  height: 100%;
  width: 100%;
  display: flex;
  
  /* flex 방향 설정 */
  ${props => props.directionRow ? css`
    flex-direction: row;
    justify-content: space-between;
    overflow-x: ${props.scroll ? 'auto' : 'hidden'};
  ` : css`
    flex-direction: column;
    overflow-y: ${props.scroll ? 'auto' : 'hidden'}; //넘치면 스크롤 or hidden
  `}
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;