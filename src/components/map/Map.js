import React, { useState } from "react";
import { getMap } from "../../api/mapApi";
import styled from "styled-components";
import Field from "./field/Field";

const Map = () => {
  const [map, setMap] = useState(getMap());

  return (
    <MapLayout width={map[1].length}>
      {map.map((line, y) => {
        return line.map((char, x) => {
          return <Field key={x + "-" + y} x={x} y={y} char={char} />;
        });
      })}
    </MapLayout>
  );
};

const MapLayout = styled.div`
  position: relative;
  image-rendering: pixelated;
  width: ${(props) => props.width * 64}px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display:flex;
  flex-wrap: wrap;
`;

export default Map;
