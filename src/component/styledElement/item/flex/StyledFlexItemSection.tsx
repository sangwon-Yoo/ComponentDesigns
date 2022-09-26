import styled from "styled-components";

export interface StyledFlexItemSectionProps {
    bgColor?: string;
    height?: string;
}

const StyledFlexItemSection = styled.section<StyledFlexItemSectionProps>`
  
  flex: 0 0 ${props => props.height || '90vh'};
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};

  //스마트폰 사이즈 이하
  @media all and (max-width: 319px) {

  }
  //스마트폰 320px ~ 768px
  @media all and (min-width: 320px) and (max-width: 768px) {

  }
  //태블릿 768px ~ 1024px
  @media all and (min-width: 769px) and (max-width: 1024px) {
    margin: 0 10% 0 10%;
  }
  //pc 1024px ~ 1440px
  @media all and (min-width: 1025px) and (max-width: 1440px){
    margin: 0 10% 0 10%;
  }
  //max-width 초과시
  @media all and (min-width: 1441px) {
    width: 1152px; //1440 * 0.8
    margin-left: auto;
    margin-right: auto;
  }
`;

export default StyledFlexItemSection;