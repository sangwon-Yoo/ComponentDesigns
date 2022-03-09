import React from 'react';
import { FlexContainerL } from "src/styled/layout/flexContainerL";
import { FlexItemMainC, FlexItemSectionC } from "src/styled/component/flexItemC";

function App() {
  return (
      <FlexContainerL>
        <FlexItemMainC />
        <FlexItemSectionC />
        <FlexItemSectionC />
      </FlexContainerL>
  );
}

export default App;
