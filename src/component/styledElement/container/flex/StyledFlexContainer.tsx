import styled, { css } from "styled-components";

export interface StyledFlexContainerProps {
    bgColor?: string;
    direction: 'row' | 'column';
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  
  //100vw, 100vh 쓰면 가능하긴 한데 overflow 시 보기 안좋음. 짤림.
  height: 100%;
  width: 100%;
  display: flex;
  
  /* flex 방향 설정 */
  flex-direction: ${props => props.direction};
  justify-content: space-between; //자식들간에 공간이 발생되어야하지만, height100% 이기 때문에 자식들의 크기가 곧 이 컨테이너의 크기 > 즉 스페이스 없음. 
  
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;