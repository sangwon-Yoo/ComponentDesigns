import styled from "styled-components";

export interface StyledFlexItemMainProps {
    bgColor?: string;
    height?: string;
    bgImg?: string;
}

const StyledFlexItemMain = styled.main<StyledFlexItemMainProps>`
  flex: 0 0 ${props => props.height || '50vh'};
  /*
  flex: 0 0 auto 의미
  flex-grow = 0 : flex-basis 보다 커질 수 없음, flex-shrink = 0: flex-basis 보다 줄어들 수 없음, flex-basis = auto : 콘텐츠 크기
  width 의 경우 align-item : stretch(default)에 의해 끝까지 늘여짐
  */
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
  background-image: url(${props => props.bgImg});
  background-size: cover;
`;

export default StyledFlexItemMain;