import { ThemeProvider } from "styled-components";
import { myBlogTheme } from "style/themes";
import GlobalStyle from "./style/globalStyle";
import StyledViewportBox from "./component/styledElement/box/viewport/StyledViewportBox";
import BlogHome from "./pages/BlogHome";

function App() {
  return (
      <ThemeProvider theme={myBlogTheme}>
          <GlobalStyle />
          {/*<StyledViewportBox>*/}
              <BlogHome />
          {/*</StyledViewportBox>*/}
      </ThemeProvider>

  );
}

export default App;