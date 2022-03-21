import FlexboxWithMainB from "components/block/layout/flexboxWithMainB";
import { ThemeProvider } from "styled-components";
import { myBlogTheme } from "styles/themes";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
      <ThemeProvider theme={myBlogTheme}>
          <GlobalStyle />
          <FlexboxWithMainB>
              <div>hello</div>
              <div>myNameis</div>
              <div>Sangwon</div>
          </FlexboxWithMainB>
      </ThemeProvider>

  );
}

export default App;