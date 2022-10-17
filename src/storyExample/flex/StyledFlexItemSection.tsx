import styled from "styled-components";
import { Media } from "style/mediaQuery";

const StyledFlexSection = styled.section`
  
  flex: 0 0 700px;
  
  background-color: ${props => props.theme.color.bg.secondary};

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

export default StyledFlexSection;