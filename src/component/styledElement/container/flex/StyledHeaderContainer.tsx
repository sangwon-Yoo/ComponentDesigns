import styled from "styled-components";

export interface StyledHeaderContainer {
    bgColor?: string;
    direction: 'row' | 'column';
}

export const StyledHeaderContainer = styled.div<StyledHeaderContainer>`
  
  height: 100%;
  width: 100%;
  margin: 0 10% 0 10%;
  display: flex;
  
  /* flex 방향 설정 */
  flex-direction: ${props => props.direction};
  justify-content: space-between; //자식들간에 공간이 발생되어야하지만, height100% 이기 때문에 자식들의 크기가 곧 이 컨테이너의 크기 > 즉 스페이스 없음. 
  
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledHeaderContainer;