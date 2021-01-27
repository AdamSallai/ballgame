import React from 'react'
import styled from 'styled-components';
import Map from './Map';

const Main = () => {
  return (
    <MainBody>
      <Map />
    </MainBody>
  )
}

const MainBody = styled.div`
  height: 100vh;
  position:relative;
  margin-left: 200px;
`


export default Main
