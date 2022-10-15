import styled from "styled-components";

interface StyledTransparentAnchorProps {
    width?: string;
    height?: string;
    color?: string;
    fontSize?: string;
}

export const StyledAnchorWrapper = styled.div`
    text-align: center;
`;
export const StyledTransparentAnchor = styled.a<StyledTransparentAnchorProps>`
  
    display: flex;
    justify-content: center;
    align-items: center;
  
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