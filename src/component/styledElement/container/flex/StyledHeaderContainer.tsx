import styled, { css } from "styled-components";

export interface StyledHeaderContainer {
    bgColor?: string;
    flexDirection: 'row' | 'column';
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItem?: string;
}

const StyledHeaderContainer = styled.div<StyledHeaderContainer>`
  
  ${props => props.flexDirection === 'row' && css`
      height: 100%;
  `}
  ${props => props.flexDirection === 'column' && css`
      width: 100%;
  `}
  
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent}; //자식들간에 공간이 발생되어야하지만, height100% 이기 때문에 자식들의 크기가 곧 이 컨테이너의 크기 > 즉 스페이스 없음.
  align-items: ${props => props.alignItem};

  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledHeaderContainer;