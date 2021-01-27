import React from "react";
import styled from "styled-components";

const InformationBar = () => {
  return (
    <InfoDiv>
      <Text>Gold: 3</Text>
    </InfoDiv>
  );
};

const InfoDiv = styled.div`
  width: 100px;
  height: 70px;
  margin: 80px 50px 0px 50px;
  background-color: #4f4334;
`;

const Text = styled.p`
  font-size: 24px;
  color: gold;
  text-align: center;
`;

export default InformationBar;
