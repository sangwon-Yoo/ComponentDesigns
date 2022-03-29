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
    src: local('NotoSansKR-Bold'),
    url('/src/styles/font/NotoSansKR/NotoSansKR-Bold.otf') format('otf');
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    font-weight: 400;
    src: local('NotoSansKR-Regular'),
    url('/src/styles/font/NotoSansKR/NotoSansKR-Regular.otf') format('otf');
  }

  @font-face {
    font-family: 'NotoSansKR-Thin';
    font-weight: 100;
    src: local('NotoSansKR-Thin'),
    url('/src/styles/font/NotoSansKR/NotoSansKR-Thin.otf') format('otf');
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
    font-size: 100%;
    font: inherit;
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
  /*
      ++ global CSS
      Reset End,
      Global Custom CSS Start
  */

  html {
    font-family: NotoSansKR-Regular;
    font-size: 16px;
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.color.bg.primary || '#ffffff'};
  }
  
  //storybook 용
  #root {
    height: 100%;
    width: 100%;
  }

  /*
      Global Custom CSS End
  */

  /* Reset CSS End */
`;

export default GlobalStyle;