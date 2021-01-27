import wall from "./tiles/wall.png";
import ball from "./tiles/ball.png";
import door from "./tiles/door.png";
import floor from "./tiles/floor.png";
import cannon from "./tiles/wall.png";
import leftup from "./tiles/leftup.png";
import leftdown from "./tiles/leftdown.png";
import rightup from "./tiles/rightup.png";
import rightdown from "./tiles/rightdown.png";

export const images = {
  wall: wall,
  door: door,
  cannon: cannon,
  ball: ball,
  floor: floor,
  boxes: [leftup, leftdown, rightup, rightdown],
};

export const getImageFromChar = (char) => {
  switch (char) {
    case "W":
      return wall;
    case "F":
      return floor;
  }
};
