import styled from "styled-components";
import { StyledFlexMain } from "../../container/flex/StyledFlex";
import { isMobile } from "../../../../style/mediaQuery";

const StyledMainRepresentativeBox = styled(StyledFlexMain)`
  
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

export default StyledMainRepresentativeBox;