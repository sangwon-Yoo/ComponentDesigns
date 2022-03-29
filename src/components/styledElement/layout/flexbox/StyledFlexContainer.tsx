import styled, { css } from "styled-components";

export interface StyledFlexContainerProps {
    bgColor? : string;
    noScroll? : boolean;
    directionRow?: boolean;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  //++확장성을 위해 100vh 대신 %를 씀
  height: 100%;
  width: 100%;
  display: flex;
  ${props => props.directionRow ? css`
    flex-direction: row;
    overflow-x: ${props.noScroll ? 'hidden' : 'auto'};
  ` : css`
    flex-direction: column;
    overflow-y: ${props.noScroll ? 'hidden' : 'auto'}; //넘치면 스크롤 or hidden
  `}
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;