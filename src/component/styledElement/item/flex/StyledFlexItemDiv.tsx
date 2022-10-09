import styled from "styled-components";

export interface StyledFlexItemDivProps {
    flex?: string;
    bgColor?: string;
}

const StyledFlexItemDiv = styled.div<StyledFlexItemDivProps>`
  flex: ${props => props.flex || '0 0 auto'};
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemDiv;