import React from 'react';
import styled from 'styled-components';

import Hero from "./Hero";

const App = styled("div")`
  font-family: 'Lato', 'Helvetica Neue', sans-serif;
`;

export default () => (
  <App>
    <Hero />
  </App>
);