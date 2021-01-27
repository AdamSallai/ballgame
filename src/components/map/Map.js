import React, { useState } from "react";
import { getMap } from "../../api/mapApi";
import styled from "styled-components";
import Field from './field/Field';

const Map = () => {
  const [map, setMap] = useState(getMap());

  return (
    <MapLayout>
      {map.map((line, y) => {
        line.map((char, x) => {
          return <Field key={x+"-"+y} x={x} y={y} char={char}/>
        });
      })}
    </MapLayout>
  );
};

const MapLayout = styled.div`
  image-rendering: pixelated;
`;

export default Map;
