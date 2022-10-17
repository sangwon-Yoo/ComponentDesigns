import styled from "styled-components";
import { StyledFlexMain } from "../../flex/StyledFlex";
import { isMobile } from "../../../../style/mediaQuery";

const StyledMainContentsBox = styled(StyledFlexMain)`
  
    background-image: url('/img/gradationBg.jpeg');
    background-size: cover;
  
    & .button-area {
      flex: 0 0 6rem;
    }
    ${isMobile} {
      & .button-area {
        flex-direction: column;
        justify-content: flex-end;
        flex: 0 0 10rem;
      }
    }
`;

export default StyledMainContentsBox;