import styled from "styled-components";

interface StyledTextProps {
    fontSize?: string;
    fontColor?: string;
    padding?: string;
    margin?: string;
}
const StyledText = styled.span<StyledTextProps>`
  
    font-size: ${props => props.fontSize || '1rem'};
    color: ${props => props.fontColor || props.theme.color.font.black};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;

export default StyledText;