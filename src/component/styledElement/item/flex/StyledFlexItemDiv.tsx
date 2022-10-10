import styled from "styled-components";
import {isMobile} from "../../../../style/mediaQuery";

export interface StyledFlexItemDivProps {
    flex?: string;
    flexM?: string;
    bgColor?: string;
}

const StyledFlexItemDiv = styled.div<StyledFlexItemDivProps>`
  
  flex: ${props => props.flex || '0 0 auto'};
  ${isMobile} {
    flex: ${props => props.flexM || props.flex || '0 0 auto'};
  }
  
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemDiv;