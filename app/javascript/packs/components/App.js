import React from 'react';
import styled from 'styled-components';

import Hero from "./Hero";
import RestaurantList from "./RestaurantList";

const App = styled("div")`
  font-family: 'Lato', 'Helvetica Neue', sans-serif;
`;

export default () => (
  <App>
    <Hero />
    <RestaurantList />
  </App>
);