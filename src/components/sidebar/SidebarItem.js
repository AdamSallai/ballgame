import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { DraggedContext } from '../../context/DraggedElement';

const SidebarItem = ({image}) => {

  const [,setElement] = useContext(DraggedContext);
  // const [imageField] = useState()

  const handleDragStart = (e) => {
    setElement(<Img src={image} />)
  }

  return (
    <Item image={image}>
      <Img draggable onDragStart={(e) => handleDragStart(e)} src={image} />
    </Item>
  )
}

const Item = styled.div`
position:relative;
  width: 100px;
  height: 100px;
  margin: 60px 50px;
  background-color: #FFD4AC;
`

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  image-rendering: pixelated;

`

export default SidebarItem
