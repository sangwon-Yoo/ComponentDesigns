import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS Start */

  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  /* ++ fonts */
  @font-face {
    font-family: 'NotoSansKR-Bold';
    font-weight: 700;
    src: local('NotoSansKR-Bold'),  //로컬 디바이스에 해당 폰트가 있으면 쓰고, 없으면 아래 경로에서 순서대로 찾아서 적용한다.
    url('/font/NotoSansKR/NotoSansKR-Bold.woff2') format('woff2'),  //woff 의 버전업 버전
    url('/font/NotoSansKR/NotoSansKR-Bold.woff') format('woff');    //otf, ttf 를 웹 전용으로 압축한 형태 w : web
    url('/font/NotoSansKR/NotoSansKR-Bold.otf') format('opentype'); //raw 한 폰트. 용량이크다는 단점이 있다.
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    font-weight: 400;
    src: local('NotoSansKR-Regular'),
    url('/font/NotoSansKR/NotoSansKR-Regular.woff2') format('woff2'),
    url('/font/NotoSansKR/NotoSansKR-Regular.woff') format('woff'),
    url('/font/NotoSansKR/NotoSansKR-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'NotoSansKR-Thin';
    font-weight: 100;
    src: local('NotoSansKR-Thin'),
    url('/font/NotoSansKR/NotoSansKR-Thin.woff2') format('woff2'),
    url('/font/NotoSansKR/NotoSansKR-Thin.woff') format('woff'),
    url('/font/NotoSansKR/NotoSansKR-Thin.otf') format('opentype');
  }

  /*
      ++ 'main' tag
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  main, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%; //브라우저 세팅의 100%를 따른다.
    font: inherit; //상위 요소의 font 속성을 상속한다. 따로 정의가 있으면 부모 상속은 후순위로 밀린다.
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Reset CSS End */
  
  /*
      Global Custom CSS Start
  */
  /*
    html, body, StyledFlexContainer 를 다 100% 주는 이유는 
    100vh 100vw는 뷰포트기 때문에 스크룰 넘치는 영역은 커버가 안된다.
    100%를 주면 실제 크기는 자식들 중 최초로 실제 크기를 가지는 아이들에 의해 정해진다.
    이번 경우에는 StyledFlexContainer 의 자식들. >> 아닌거 같은데.
    Div 의 기본 속성인 display : block 의 경우 height는 기본 0, width는 부모 컨테이너를 다 차지한다.
    기본적으로 컨테이너들의 높이를 안주고, 자식들 중에 높이가 생기면 자연스레 높이가 생기는 것이 원칙.
  */
  html {
    /*height: 100%;*/
    /*width: 100%;*/
    /* html 은 최상단이다. 100%를 먹여버리면 뷰포트 영역을 부모로 인식하고 써버리게 된다.
      아무런옵션을 주지 않으면 자식들 중 실제 크기가 있는 아이들 기준으로 높이를 가지게 된다.
    */
  }
  
  body {
    font-family: NotoSansKR-Regular; //자식들은 inherit 이 활성화되어서 상속 받는다.
    font-size: 16px; //자식들은 inherit 이 활성화되어서 상속 받는다.
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.color.bg.secondary}; //블렉테마 등
  }
  
  .img-contain {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  

  /*
      Global Custom CSS End
  */
`;

export default GlobalStyle;