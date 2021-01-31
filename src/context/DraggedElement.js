import React, {createContext, useState} from "react";

export const DraggedContext = createContext();

export const DraggedProvider = (props) => {
  const [element, setElement] = useState("")

  return (
    <DraggedContext.Provider value={[element, setElement]}>
      {props.children}
    </DraggedContext.Provider>
  )

}


// export const ThemeContext = createContext();

// export const ThemeProvider = (props) => {
//   const [colorTheme, setColorTheme] = useState("dark");

//   return (
//     <ThemeContext.Provider value={[theme[colorTheme], setColorTheme]}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };