import React, {useContext} from 'react';
import styled from 'styled-components';
import { DraggedContext } from '../../context/DraggedElement';

const SidebarItem = ({image}) => {

  const [,setElement] = useContext(DraggedContext);

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 60px 50px;
  background-color: #FFD4AC;
`

const Img = styled.img`
  position: absolute;
  width: 64px;
  height: 64px;
  image-rendering: pixelated;
`

export default SidebarItem
