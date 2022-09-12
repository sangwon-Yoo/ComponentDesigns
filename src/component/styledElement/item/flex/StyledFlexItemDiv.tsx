import styled, { css } from "styled-components";

export interface StyledFlexItemDivProps {
    bgColor?: string;
}

const StyledFlexItemDiv = styled.section<StyledFlexItemDivProps>`
  flex: 1 1 auto;
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemDiv;