import React from 'react';
import styled from 'styled-components';

const Main = styled("main")`

`;

const Figure = styled("figure")`

`;

const TopBun = styled("div")`

`;

const Face = styled("div")`

`;

const LeftEye = styled("div")`

`;

const RightEye = styled("div")`

`;

const Mouth = styled("div")`

`;

const Seeds = styled("div")`
  position: absolute;
  top: 62px;
  left: 0;
  z-index: 2;
`;

const Seed = styled("div")`

`;

const Tomato = styled("div")`

`;

const Lettuce = styled("div")`

`;

const Leaf = styled("div")`

`;

const Cover = styled("div")`

`;

const Arch = styled("div")`

`;

const Cheese = styled("div")`

`;

const Burger = styled("div")`

`;

const Spot = styled("div")`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #b34b10;
  &:nth-child(1) {
    top: 3px;
    left: 6px;
  }
  &:nth-child(2) {
    top: 4px;
    left: 20px;
    width: 2px;
    height: 2px;
  }
  &:nth-child(3) {
    top: 3px;
    left: 32px;
    width: 3px;
    height: 3px;
  }
  &:nth-child(4) {
    top: 4px;
    left: 46px;
    width: 2px;
    height: 2px;
  }
  &:nth-child(5) {
    top: 5px;
    left: 59px;
    width: 3px;
    height: 3px;
  }
  &:nth-child(6) {
    top: 3px;
    left: 70px;
    width: 2px;
    height: 2px;
  }
  &:nth-child(7) {
    top: 3px;
    left: 78px;
    width: 5px;
    height: 5px;
  }
  &:nth-child(8) {
    top: 2px;
    left: 88px;
    width: 2px;
    height: 2px;
  }
  &:nth-child(9) {
    top: 4px;
    left: 96px;
    width: 3px;
    height: 3px;
  }
  &:nth-child(10) {
    top: 3px;
    left: 106px;
    width: 4px;
    height: 4px;
  }
  &:nth-child(11) {
    top: 3px;
    left: 114px;
    width: 2px;
    height: 2px;
  }
  &:nth-child(12) {
    top: 3px;
    left: 120px;
    width: 4px;
    height: 4px;
  }
`;

const BottomBun = styled("div")`

`;

const Shadow = styled("div")`

`;

export default () => (
  <Main>
    <Figure>
        <TopBun>
            <Face>
                <LeftEye />
                <RightEye />
                <Mouth />
            </Face>
            <Seeds>
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
                <Seed />
            </Seeds>
        </TopBun>
        <Tomato />
        <Lettuce>
            <Leaf />
            <Leaf />
            <Leaf />
            <Leaf />
            <Leaf />
            <Leaf />
            <Cover>
              <Arch />
              <Arch />
              <Arch />
              <Arch />
              <Arch />
            </Cover>
        </Lettuce>
        <Cheese />
        <Burger>
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
        </Burger>
        <BottomBun />
        <Shadow />
    </Figure>
  </Main>
);
