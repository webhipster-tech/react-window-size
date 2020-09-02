# @webhipster-tech/react-window-size

> Library to work with browser window size.
>
> CSS properties `height: 100vh;` and `width: 100vw;` works incorrectly in mobile browsers.
> This library was created to fix this issue.

[![Build Status](https://travis-ci.com/ykukharskyi/react-window-size.svg?branch=master)](https://travis-ci.com/ykukharskyi/react-window-size)
[![NPM](https://img.shields.io/npm/v/@webhipster-tech/react-window-size.svg)](https://www.npmjs.com/package/@webhipster-tech/window-size)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm

```bash
npm install --save @webhipster-tech/react-window-size
```

### yarn

```bash
yarn add @webhipster-tech/react-window-size
```

## Usage

### React hooks

#### `useWindowSize` hook

```jsx
import React from "react";
import { useWindowSize } from "@webhipster-tech/react-window-size";

const Example = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  return <MyComponent height={windowHeight} width={windowWidth} />;
}
```

#### `useWindowSize` hook with styled-components

```jsx
import React from "react";
import styled from "styled-components";
import { useWindowSize } from "@webhipster-tech/window-size";

const WindowWrapper = styled.div`
  height: ${({ windowHeight }) => windowHeight}px;
  widows: ${({ windowWidth }) => windowWidth}px;
`;

const Example = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  return (
    <WindowWrapper
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    />
  );
}
```

> Example of usage with styled-components available by
> [link](https://github.com/ykukharskyi/react-window-size/tree/master/hooks-example)

#### `useWindowHeight` hook

```jsx
import React from "react";
import { useWindowHeight } from "@webhipster-tech/react-window-size";

const Example = () => {
  const windowHeight = useWindowHeight();
  return <MyComponent height={windowHeight} />;
}
```

#### `useWindowWidth` hook

```jsx
import React from "react";
import { useWindowWidth } from "@webhipster-tech/react-window-size";

const Example = () => {
  const windowWidth = useWindowWidth();
  return <MyComponent width={windowWidth} />;
}
```

## License

MIT © [ykukharskyi](https://github.com/ykukharskyi)
