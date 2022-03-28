import { ThemeProvider } from "styled-components";
import { myBlogTheme } from "styles/themes";
import GlobalStyle from "./styles/globalStyle";
import FlexLayoutWithMain from "components/block/layout/FlexLayoutWithMain";

function App() {
  return (
      <ThemeProvider theme={myBlogTheme}>
          <GlobalStyle />
          <FlexLayoutWithMain>
              <div>hello</div>
              <div>myNameis</div>
              <div>Sangwon</div>
          </FlexLayoutWithMain>
      </ThemeProvider>

  );
}

export default App;