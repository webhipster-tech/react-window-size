import React from "react";
import styled from "styled-components";
import { useWindowSize } from "@webhipster-tech/window-size";

const WindowWrapper = styled.div`
  height: ${({ windowHeight }) => windowHeight}px;
  widows: ${({ windowWidth }) => windowWidth}px;
  background: red;
`;

const App = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  return (
    <WindowWrapper
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    />
  );
}

export default App;
