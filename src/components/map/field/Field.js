import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components';
import { DraggedContext } from '../../../context/DraggedElement';
import { getImageFromChar } from '../../../images/images';

const Field = ({char}) => {
  const[block, setBlock] = useState("");
  const[content, setContent] = useState("");
  const[element, setElement] = useContext(DraggedContext);

  useEffect(() => {
    let array = [];

    getImageFromChar(char).forEach((picture, index) => {
      const line = <Img key={index} src={picture} alt=""/>
      if(index === 1){
        setBlock(prev => prev =line)
      }else {
        array.push(line);
      }
    })

    setContent(()=>array);
    

  }, [char])

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    if(element !== "" && char === "F"){
      setBlock(()=>element)
      setElement("")
    }
  }

  return (
    
    <Box onDragOver={(e) => handleDragOver(e)}
         onDrop={(e) => handleDrop(e)}
    >
      {content}
      {block}
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
  position: absolute;
`



export default Field
