import styled from "styled-components";

const StyledFlexItemMain = styled.main<{bgColor?: string; height?: string}>`
  flex: 0 0 auto;
  height: ${props => props.height || '50vh'};
  /*
  flex: 0 0 auto 의미
  flex-grow = 0 : flex-basis 보다 커질 수 없음, flex-shrink = flex-basis 보다 줄어들 수 없음, flex-basis = auto : 콘텐츠 크기
  */
  background-color: ${props => props.bgColor || props.theme.color.bg.secondary};

  //스마트폰 사이즈 이하
  @media all and (max-width: 319px) {
  }
  //스마트폰 320px ~ 768px
  @media all and (min-width: 320px) and (max-width: 768px) {
  }
  //태블릿 768px ~ 1024px
  @media all and (min-width: 769px) and (max-width: 1024px) {
  }
  //pc 1024px ~
  @media all and (min-width: 1025px) and (max-width: 1440px){
  }
  //max-width 초과시
  @media all and (min-width: 1441px) {
  }
`;

export default StyledFlexItemMain;