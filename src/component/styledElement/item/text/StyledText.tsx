import styled from "styled-components";

interface StyledSpanTextProps {
    fontSize?: string;
    fontColor?: string;
    padding?: string;
    margin?: string;
}
const StyledSpanText = styled.span<StyledSpanTextProps>`
  
    font-size: ${props => props.fontSize || '1rem'};
    color: ${props => props.fontColor || props.theme.color.font.black};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;


interface StyledFlexParagraphProps {
    flex?: string;  //flex item
    bgColor?: string; //디버깅용

    fontSize?: string;
    fontColor?: string;
    padding?: string;
    margin?: string;
}
const StyledFlexParagraph = styled.p<StyledFlexParagraphProps>`
  
    flex: ${props => props.flex};
    background-color: ${props => props.bgColor};

    font-size: ${props => props.fontSize || '1rem'};
    color: ${props => props.fontColor || props.theme.color.font.black};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;

export { StyledSpanText, StyledFlexParagraph };