import styled from "styled-components";

export interface StyledViewportBoxProps {
    bgColor?: string;
}

const StyledViewportBox = styled.div<StyledViewportBoxProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledViewportBox;