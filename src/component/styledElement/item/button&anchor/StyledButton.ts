import styled from "styled-components";

interface StyledTransparentButtonProps {
    width?: string;
    height?: string;
    color?: string;
    fontSize?: string;
}
export const StyledTransparentButton = styled.button<StyledTransparentButtonProps>`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: 4px;
    border: 2px solid ${props => props.color || '#ffffff'};
    border-radius: 2px;
    background-color: transparent;
    color: ${props => props.color || '#ffffff'};
    font-size: ${props => props.fontSize};
    cursor: pointer;
    transition: background-color .12s ease;

    :hover {
        color: black;
        background-color: ${props => props.color || '#ffffff'};
    }
`;