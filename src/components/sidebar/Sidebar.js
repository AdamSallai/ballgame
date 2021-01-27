import React from 'react';
import styled from 'styled-components';
import { images } from '../../images/images';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <SidebarDiv>
      { images.boxes.map(box => <SidebarItem key={box} image={box} />) }
    </SidebarDiv>
  )
}

const SidebarDiv = styled.div`
  background-color: #B89265;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;

`


export default Sidebar
