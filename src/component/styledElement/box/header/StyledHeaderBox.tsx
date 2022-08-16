import styled from "styled-components";

export interface StyledHeaderBoxProps {
    heightM: string;
    heightP: string;
    bgColor?: string;
}

const StyledHeaderBox = styled.div<StyledHeaderBoxProps>`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  border-bottom: 1px solid #DDDDDD;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 4%);
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
  
  //스마트폰 사이즈 이하
  @media all and (max-width: 319px) {
    height: ${props => props.heightM};
  }
  //스마트폰 320px ~ 768px
  @media all and (min-width: 320px) and (max-width: 768px) {
    height: ${props => props.heightM};
  }
  //태블릿 768px ~ 1024px
  @media all and (min-width: 769px) and (max-width: 1024px) {
    height: ${props => props.heightP};
  }
  //pc 1024px ~ 1440px
  @media all and (min-width: 1025px) and (max-width: 1440px){
    height: ${props => props.heightP};
  }
  //max-width 초과시
  @media all and (min-width: 1441px) {
    height: ${props => props.heightP};
  }
`;

export default StyledHeaderBox;