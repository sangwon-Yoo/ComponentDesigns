import styled from "styled-components";
import {isMobile} from "style/mediaQuery";
import StyledFlex from "../../flex/StyledFlex";

export interface StyledHeaderBoxProps {
    heightP: string;
    heightM: string;
    bgColor?: string;
}

const StyledHeaderBox2 = styled.div<StyledHeaderBoxProps>`
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
    
    & .header-item {
    padding: 1rem 1rem 1rem 1rem;
    
    ${isMobile} {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    }
`;

const StyledHeaderBox = styled(StyledFlex)`
  
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0; right: 0; //width 100% 대신 이처럼 쓰면 padding right 오류가 안난다.
  
    border-bottom: 1px solid #DDDDDD;
    box-shadow: 0px 2px 3px rgb(0 0 0 / 4%);
    background-color: #f9f9f3;
    padding: 0 10% 0 10%;
  
    // 클래스 > 클래스가 되기 때문에 더 구체적인 클래스가 되므로 우선순위가 높아진다. 
    & .img-contain {
      object-fit: contain;
      border-radius: 4.5px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      height: 100%;
      width: 100%;
    }
  
    height: 5rem;
    & .header-item {
      flex: 0 0 32px;
      padding: 1.6rem 1.6rem 1.6rem 1.6rem;
    }
    & .header-logo {
      flex: 0 0 28px;
      padding: 1.6rem 1.6rem 1.6rem 1.6rem;
    }
  
    ${isMobile} {
      height: 3rem;
      border-bottom: unset;
      background-color: #111111;
      opacity: 0.875;
      padding: 0 8px 0 8px;
      & .header-item {
        flex: 0 0 20px;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      }
      & .header-logo {
        flex: 0 0 28px;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      }
    }
`;

export default StyledHeaderBox;