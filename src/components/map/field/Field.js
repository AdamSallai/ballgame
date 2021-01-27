import React from 'react'
import styled from 'styled-components';
import { getImageFromChar } from '../../../images/images';

const Field = ({x, y, char}) => {

  return (
    <Box>
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
