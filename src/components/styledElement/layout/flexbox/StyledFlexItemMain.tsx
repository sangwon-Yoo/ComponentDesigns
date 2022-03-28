import styled from "styled-components";

const StyledFlexItemMain = styled.main<{bgColor?: string; height?: string}>`
  flex: 0 0 auto;
  height: ${props => props.height || '50vh'};
  /*
  flex: 0 0 auto 의미
  flex-grow = 0 : flex-basis 보다 커질 수 없음, flex-shrink = flex-basis 보다 줄어들 수 없음, flex-basis = auto : 콘텐츠 크기
  */
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};
`;

export default StyledFlexItemMain;