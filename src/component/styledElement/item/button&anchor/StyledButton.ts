import styled, { css } from "styled-components";
import { isMobile } from "../../../../style/mediaQuery";

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

interface StyledFlexButtonProps {
    flexDirection?: string; //default : row
    justifyContent?: string; //default : flex2-start
    alignItem?: string; //default : stretch
    flexWrap?: string; //default : no-wrap

    flex?: string;  //flex2 item 도 가능
}
export const StyledFlexButton = styled.button<StyledFlexButtonProps>`
  
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
    flex-wrap: ${props => props.flexWrap};
  
    flex: ${props => props.flex};
`;

interface StyledFlexIconButtonProps extends StyledFlexButtonProps {
    margin?: string;
    padding?: string;
    noHover?: boolean;
}
export const StyledFlexIconButton = styled(StyledFlexButton)<StyledFlexIconButtonProps>`
  
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
  
    border-radius: 2px;
    transition: background-color .12s ease;

    ${props => (props.noHover !== true) && css`
      &:hover {
        background-color: #ececeb;
      }

      ${isMobile} {
        &:hover {
          background-color: unset;
          & .hover-able {
            color: ${props => props.theme.color.signature.pointer};
          }
        }
      }
    `};    
`;