import styled, { css } from "styled-components";

export interface StyledFlexItemDivProps {
    bgColor?: string;
    height?: string;
    width?: string;
}

const StyledFlexItemDiv = styled.section<StyledFlexItemDivProps>`
  flex: 0 0 auto;
  ${props => props.height && css`height: ${props.height}`};
  ${props => props.width && css`width: ${props.width}`};
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemDiv;