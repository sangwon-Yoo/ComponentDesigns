import styled from "styled-components";

interface StyledTextProps {
    fontSize: string;
    fontColor: string;
}
const StyledText = styled.span<StyledTextProps>`
    font-size: ${props => props.fontSize};
    color: ${props => props.fontColor};
`;

export default StyledText;