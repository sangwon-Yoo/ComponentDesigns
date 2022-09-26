import styled, { css } from "styled-components";

export interface StyledFlexItemDivProps {
    size?: string;
    bgColor?: string;
}

const StyledFlexItemDiv = styled.section<StyledFlexItemDivProps>`
  flex: 0 0 ${props => props.size || 'auto'};
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemDiv;