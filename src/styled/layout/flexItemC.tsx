import styled from "styled-components";

const FlexItemMainC = styled.main`
  flex: 0 0 auto;
  /*
  flex: 0 0 auto 의미
  flex-grow = 0 : flex-basis 보다 커질 수 없음, flex-shrink = flex-basis 보다 줄어들 수 없음, flex-basis = auto : 콘텐츠 크기= 100px
  */
  height: 100px;
  background-color: antiquewhite;

  //스마트폰 사이즈 이하
  @media all and (max-width: 319px) {
    height: 300px;
  }
  //스마트폰 320px ~ 768px
  @media all and (min-width: 320px) and (max-width: 768px) {
    height: 300px;
  }
  //태블릿 768px ~ 1024px
  @media all and (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
  }
  //pc 1024px ~
  @media all and (min-width: 1025px) and (max-width: 1440px){
    height: 400px;
  }
  //max-width 초과시
  @media all and (min-width: 1441px) {
    height: 400px;
  }
`;

const FlexItemSectionC = styled.section`
  flex: 0 0 auto;
  height: 480px; //임시
  border: solid #333333; //임
  background-color: aquamarine;

  //스마트폰 사이즈 이하
  @media all and (max-width: 319px) {

  }
  //스마트폰 320px ~ 768px
  @media all and (min-width: 320px) and (max-width: 768px) {

  }
  //태블릿 768px ~ 1024px
  @media all and (min-width: 769px) and (max-width: 1024px) {
    margin: 0 10% 0 10%;
  }
  //pc 1024px ~
  @media all and (min-width: 1025px) and (max-width: 1440px){
    margin: 0 10% 0 10%;
  }
  //max-width 초과시
  @media all and (min-width: 1441px) {
    width: 1152px; //1440 * 0.8
    margin-left: auto;
    margin-right: auto;
  }
`;

export { FlexItemMainC, FlexItemSectionC };
