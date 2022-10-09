import styled from "styled-components";
import { Media } from "style/mediaQuery";

export interface StyledFlexItemSectionProps {
    bgColor?: string;
    height?: string;
}

const StyledFlexItemSection = styled.section<StyledFlexItemSectionProps>`
  
  flex: 0 0 ${props => props.height || '90vh'};
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};

  ${Media.tablet} {
    margin: 0 10% 0 10%;
  }
  ${Media.desktop} {
    margin: 0 10% 0 10%;
  }
  ${Media.overflow} {
    width: 1152px; //1440 * 0.8
    margin-left: auto;
    margin-right: auto;
  }
`;

export default StyledFlexItemSection;