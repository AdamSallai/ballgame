import React from 'react';
import styled from 'styled-components';

const StartButton = () => {
  return (
    <Button>
      <Text>
        Start
      </Text>
    </Button>
  )
}

const Button = styled.div`
  width: 100px;
  height: 70px;
  margin: 20px 50px 0px 50px;
  background-color: #4f4334;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
`;

export default StartButton
