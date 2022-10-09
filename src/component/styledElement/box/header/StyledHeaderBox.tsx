import styled from "styled-components";
import {isMobile} from "style/mediaQuery";

export interface StyledHeaderBoxProps {
    heightM: string;
    heightP: string;
    bgColor?: string;
}

const StyledHeaderBox = styled.div<StyledHeaderBoxProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0; right: 0; //width 100% 대신 이처럼 쓰면 padding right 오류가 안난다.
  border-bottom: 1px solid #DDDDDD;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 4%);
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
  padding: 0 10% 0 10%;
  height: ${props => props.heightP};
  
  ${isMobile} {
    height: ${props => props.heightM};
  }

  & .padding01 {
    padding: 1rem 1rem 1rem 1rem;
    ${isMobile} {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
  }
  & .padding02 {
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    ${isMobile} {
      padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    }
  }
`;

export default StyledHeaderBox;