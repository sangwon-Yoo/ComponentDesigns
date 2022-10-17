import styled from "styled-components";
import { StyledFlexSection } from "../../container/flex/StyledFlex";
import { Media } from "../../../../style/mediaQuery";

const StyledMainArticleBox = styled(StyledFlexSection)`
  
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

export default StyledMainArticleBox;