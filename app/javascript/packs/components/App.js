import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Hero from "./Hero";
import Restaurants from "../containers/Restaurants";

injectGlobal`
  body {
    font-family: 'Lato', 'Helvetica Neue', sans-serif;
  }
`;

export default () => (
  <div>
    <Hero />
    <Restaurants />
  </div>
);