import styled from "styled-components";

/*
    flex2 를 사용하여, Container 이면서 Item 도 가능한 컴포넌트
*/
export interface StyledFlexProps {
    flexDirection?: string; //default : row
    justifyContent?: string; //default : flex2-start
    alignItem?: string; //default : stretch
    flexWrap?: string; //default : no-wrap

    flex?: string;  //flex2 item 도 가능
    bgColor?: string; //디버깅용
}
const StyledFlex = styled.div<StyledFlexProps>`
  
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
    flex-wrap: ${props => props.flexWrap};
  
    flex: ${props => props.flex};
  
    background-color: ${props => props.bgColor};
`;
const StyledFlexMain = styled.main<StyledFlexProps>`
  
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
  
    flex: ${props => props.flex};
  
    background-color: ${props => props.bgColor};
`;
const StyledFlexSection = styled.section<StyledFlexProps>`
  
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
  
    flex: ${props => props.flex};
  
    background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlex;
export { StyledFlexMain, StyledFlexSection };