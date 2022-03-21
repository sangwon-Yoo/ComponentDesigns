import FlexboxWithMainB from "components/block/layout/flexboxWithMainB";
import 'styles/reset.css';
import { ThemeProvider } from "styled-components";
import { myBlogTheme } from "styles/themes";

function App() {
  return (
      <ThemeProvider theme={myBlogTheme}>
          <FlexboxWithMainB /*bgColorMain={'skyblue'} bgColorSection={'gray'}*/>
              <div>hello</div>
              <div>myNameis</div>
              <div>Sangwon</div>
          </FlexboxWithMainB>
      </ThemeProvider>

  );
}

export default App;