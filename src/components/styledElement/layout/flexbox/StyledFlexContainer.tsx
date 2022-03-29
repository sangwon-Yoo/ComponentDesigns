import styled from "styled-components";

export interface StyledFlexContainerProps {
    bgColor? : string;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;       //넘치면 스크롤
  display: flex;          
  flex-direction: column;
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;