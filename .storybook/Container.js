import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'Lato', 'Helvetica Neue', sans-serif;
  }
`;

const Container = styled("div")`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

export default (storyFn) => (
  <Container>
    {storyFn()}
  </Container>
);