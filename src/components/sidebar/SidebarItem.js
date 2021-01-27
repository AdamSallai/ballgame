import React from 'react';
import styled from 'styled-components';

const SidebarItem = ({image}) => {
  return (
    <Item image={image}>
      <Image src={image} />
    </Item>
  )
}

const Item = styled.div`
  width: 100px;
  height: 100px;
  margin: 40px 50px;
  background-color: #FFD4AC;
`

const Image = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  image-rendering: pixelated;

`

export default SidebarItem
