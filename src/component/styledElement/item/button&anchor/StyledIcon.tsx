import styled from "styled-components";
import { Menu, MailSend, Instagram } from "@styled-icons/remix-fill";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { isMobile } from "../../../../style/mediaQuery";

interface StyledIconProps {
    widthM?: string;
    heightM?: string;
}
export const StyledIconMenu = styled(Menu)<StyledIconProps>`
  
    color: ${props => props.theme.color.signature.base};
  
    ${isMobile} {
      width: ${props => props.widthM};
      height: ${props => props.heightM};
    }
`;

export const StyledIconMail = styled(MailSend)<StyledIconProps>`
  
    color: ${props => props.theme.color.signature.base};

    ${isMobile} {
      width: ${props => props.widthM};
      height: ${props => props.heightM};
    }
`;

export const StyledIconInstagram = styled(Instagram)<StyledIconProps>`
  
    color: ${props => props.theme.color.signature.base};

    ${isMobile} {
      width: ${props => props.widthM};
      height: ${props => props.heightM};
    }
`;

export const StyledIconGithub = styled(Github)<StyledIconProps>`
  
    color: ${props => props.theme.color.signature.base};

    ${isMobile} {
      width: ${props => props.widthM};
      height: ${props => props.heightM};
    }
`;