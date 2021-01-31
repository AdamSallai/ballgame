import React, {useContext, useState} from 'react'
import styled from 'styled-components';
import { DraggedContext } from '../../../context/DraggedElement';
import { getImageFromChar } from '../../../images/images';

const Field = ({x, y, char}) => {
  const[block, setBlock] = useState("");
  const[element, setElement] = useContext(DraggedContext);

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    if(element !== "" && char !== "W"){
      setBlock(element)
      setElement("")
    }
  }

  return (
    
    <Box onDragOver={(e) => handleDragOver(e)}
         onDrop={(e) => handleDrop(e)}
    >
      {block}
      <Img src={getImageFromChar(char)} alt=""/>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
`

const Img = styled.img`
  width: 64px;
  height: 64px;
`



export default Field
