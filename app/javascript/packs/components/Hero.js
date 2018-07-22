import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import hero from "../../../assets/images/hero.jpg";

const StyledHero = styled("div")`
  
`;

const Image = styled("img")`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

const Hero = ({ children }) => (
  <StyledHero>
    <Image src={hero} />
    {
      children
    }
  </StyledHero>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Hero.defaultProps = {
  children: null
};

export default Hero;
